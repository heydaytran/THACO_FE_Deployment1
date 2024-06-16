<template>
  <dynamic-popup
    :width="500"
    :height="400"
    class="taiLieuGoc-detail"
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
              <label>stt <span class="color-red">*</span></label>
            </div>
            <base-input
              ref="refFocus"
              class="mt-1"
              v-model="model.stt"
              :maxLength="50"
              :rules="[{ name: 'required' }]"
              :disabled="viewing"
            ></base-input>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>ngay_nhan</label>
            </div>
            <ms-datepicker
              class="mt-1"
              v-model="model.ngay_nhan"
              :disabled="viewing"
            ></ms-datepicker>
          </div>
          <div class="flex1 ml-2">
            <div class="control-title">
              <label>ngay_gui</label>
            </div>
            <ms-datepicker
              class="mt-1"
              v-model="model.ngay_gui"
              :disabled="viewing"
            ></ms-datepicker>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex1">
            <div class="control-title">
              <label>loai_giay_to</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.loai_giay_to"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex1">
            <div class="control-title">
              <label>san_pham</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.san_pham"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex1">
            <div class="control-title">
              <label>ma_tra_cuu_online</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.ma_tra_cuu_online"
              :maxLength="255"
              :disabled="viewing"
            ></base-input>
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex1">
            <div class="control-title">
              <label>ghi_chu</label>
            </div>
            <base-input
              class="mt-1"
              v-model="model.ghi_chu"
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
import taiLieuGocAPI from "@/apis/components/taiLieuGocAPI";
import popupUtil from "@/commons/popupUtil";

export default {
  name: "TaiLieuGocDetail",
  extends: baseDictionaryDetail,
  components: {
    DynamicPopup,
  },
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();

    return {
      api: taiLieuGocAPI,
      formName: "TaiLieuGoc",
    };
  },
};
</script>
<style lang="scss" scoped>
.popup-container {
  padding: 16px;
}
</style>