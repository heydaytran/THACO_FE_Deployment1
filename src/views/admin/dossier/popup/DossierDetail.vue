<template>
  <dynamic-popup
    :width="700"
    :height="520"
    class="bookmarkType-detail"
    :title="title"
    @beforeOpen="beforeOpen($event, close)"
  >
    <template v-slot:icon="{ close }">
      <div class="button icon24 close" @click="close()"></div>
    </template>
    <template v-slot:content>
      <div class="flex-column h-100 popup-container">
        <div class="flex-row">
          <div class="flex1">
            <div class="control-title">
              <label>dossier_code <span class="color-red">*</span></label>
            </div>
            <base-input
              ref="refFocus"
              class="mt-1"
              v-model="model.dossier_code"
              :maxLength="50"
              :rules="[{ name: 'required' }]"
              :disabled="viewing"
            ></base-input>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>contract_code</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.contract_code"
              :maxLength="50"
              :disabled="viewing"
            ></base-input>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>bookmark_type_code</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.bookmark_type_code"
              :maxLength="50"
              :disabled="viewing"
            ></base-input>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex1">
            <div class="control-title">
              <label>customer</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.customer"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>dosage_form</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.dosage_form"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>product_name</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.product_name"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex1">
            <div class="control-title">
              <label>api</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.api"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex1">
            <div class="control-title">
              <label>manufacturer</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.manufacturer"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>applicant</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.applicant"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex2">
            <div class="control-title">
              <label>submission_code</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.submission_code"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>submission_date</label>
            </div>
            <ms-datepicker
              class="mt-1"
              v-model="model.submission_date"
              :disabled="viewing"
            ></ms-datepicker>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex2">
            <div class="control-title">
              <label>status</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.status"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>status_date</label>
            </div>
            <ms-datepicker
              class="mt-1"
              v-model="model.status_date"
              :disabled="viewing"
            ></ms-datepicker>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex1">
            <div class="control-title">
              <label>visa_no</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.visa_no"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>note</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.note"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer="{ close }">
      <div class="h-100 d-flex align-center flex1">
        <div class="flex1 flex-end">
          <base-button
            class="transparent"
            type="secondary"
            text="Hoãn"
            v-if="!viewing && this.editMode != this.$ms.constant.FormState.Add"
            @click="commandClick($ms.constant.Command.PostPone)"
          ></base-button>
          <base-button
            class="ml-4"
            @click="commandClick($ms.constant.Command.SaveView)"
            text="Cất"
            v-if="!viewing"
          ></base-button>
          <base-button
            class="ml-4"
            @click="commandClick($ms.constant.Command.Edit)"
            text="Sửa"
            v-if="viewing"
          ></base-button>
          <base-button
            class="transparent"
            type="secondary"
            text="Đóng"
            @click="close()"
            v-if="viewing"
          ></base-button>
        </div>
      </div>
    </template>
  </dynamic-popup>
</template>
<script>
import {
  ref,
  onMounted,
  watch,
  defineComponent,
  getCurrentInstance,
  reactive,
  nextTick,
  computed,
} from "vue";
import DynamicPopup from "@/components/dynamicPopup/DynamicPopup.vue";
import commonFn from "@/commons/commonFunction.js";
import axios from "axios";
import baseDictionaryDetail from "@/views/baseDictionaryDetail.js";
import dossierAPI from "@/apis/components/dossierAPI";
import popupUtil from "@/commons/popupUtil";

export default {
  name: "DossierDetail",
  extends: baseDictionaryDetail,
  components: {
    DynamicPopup,
  },
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();

    return {
      api: dossierAPI,
      formName: "Dossier",
    };
  },
};
</script>
<style lang="scss" scoped>
.popup-container {
  padding: 16px;
}
</style>