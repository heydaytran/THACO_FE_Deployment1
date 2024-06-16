<template>
  <easy-data-table
    :alternating="alternating"
    :buttons-pagination="buttonsPagination"
    :headers="headers"
    :items="items"
    @click-row="rowClick"
    v-model:items-selected="itemsSelected"
    :loading="loading"
    v-model:server-options="serverOptions"
    multi-sort
    :theme-color="'#C20000'"
    table-class-name="customize-table"
    header-text-direction="center"
    body-text-direction="left"
    border-cell
    :current-pagination-number="25"
    rowsOfPageSeparatorMessage="của"
    rowsPerPageMessage="Số dòng"
    :serverItemsLength="totalRecord"
    :header-item-class-name="headerItemClassNameFunction"
    :body-row-class-name="bodyRowClassNameFunction"
    :body-expand-row-class-name="bodyExpandRowClassNameFunction"
    :body-item-class-name="bodyItemClassNameFunction"
  >
    <template #loading>
      <loading></loading>
    </template>

    <template #item-operation="item">
      <slot name="item-operation" :item="item"> </slot>
    </template>

    <!-- <template #item-checker_code="item">
      <slot name="item-checker_code" :item="item"> </slot>
    </template>
    
    <template #item-bookmark_type_code="item">
      <slot name="item-bookmark_type_code" :item="item"> </slot>
    </template> -->
  </easy-data-table>
</template>

<script>
import { ref, getCurrentInstance, computed, onMounted, watch } from "vue";
import Loading from "@/components/loading/Loading.vue";
import {
  Header,
  Item,
  BodyRowClassNameFunction,
  HeaderItemClassNameFunction,
  BodyItemClassNameFunction,
} from "vue3-easy-data-table";
export default {
  components: {
    Loading,
  },
  props: {
    borderCell: {
      type: Boolean,
      default: true,
    },
    alternating: {
      type: Boolean,
      default: false,
    },
    buttonsPagination: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    api: {
      type: Object,
      default: null,
    },
    headers: {
      type: Array,
      default: [],
    },
    fields: {
      type: Array,
      default: null,
    },
    filters: {
      type: String,
      default: "",
    },
    funcData: {
      type: String,
      default: "getDataTable",
    },
  },
  emits: ["rowClick", "hasSort"],

  setup(props, { emit, expose }) {
    const { proxy } = getCurrentInstance();
    const itemsSelected = ref(props.multiple ? [] : null);
    const loading = ref(true);
    const totalRecord = ref(0);
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 25,
      sortBy: [],
      sortType: [],
    });
    const lastParam = ref(null);
    const items = ref([]);

    const bodyRowClassNameFunction = (item, rowNumber) => {
      return "row";
    };

    const bodyExpandRowClassNameFunction = (item, rowNumber) => {
      return "expand-row";
    };

    const bodyItemClassNameFunction = (column, rowNumber) => {
      if (column) return column;
      return "";
    };

    const headerItemClassNameFunction = (header, columnNumber) => {
      if (header.value) return header.value;
      return "";
    };
    /**
     * Sự kiện click row
     */
    const rowClick = (item) => {
      emit("rowClick", item);
    };

    const getPayload = () => {
      let payload = serverOptions.value;
      return cloneDeep(payload);
    };

    onMounted(async () => {
      serverOptions.value.fields = props.fields;
      window.grid = proxy;
    });
    function cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
    const loadData = async () => {
      loading.value = true;
      let api = props.api;
      if (api) {
        let payload = getPayload();
        payload.size = payload.rowsPerPage;
        payload.fields = props.fields;
        payload.filter = props.filters;
        try {
          let res = await api[props.funcData](payload);
          if (res && res.statusCode == 200) {
            items.value = res.data;
            totalRecord.value = res.totalRecord;
            lastParam.value = payload;
          }
        } catch (e) {
          console.log(e);
        } finally {
          loading.value = false;
        }
      }
    };
    expose({ loadData, serverOptions, lastParam, itemsSelected });

    watch(
      serverOptions,
      async () => {
        await loadData();
      },
      { deep: true }
    );

    watch(
      serverOptions.value.sortBy,
      (value) => {
        if (value.length > 0) {
          emit("hasSort", true);
        } else {
          emit("hasSort", false);
        }
      },
      { deep: true }
    );

    return {
      items,
      rowClick,
      itemsSelected,
      loading,
      serverOptions,
      totalRecord,
      bodyRowClassNameFunction,
      bodyExpandRowClassNameFunction,
      bodyItemClassNameFunction,
      headerItemClassNameFunction,
    };
  },
};
</script>
<style lang="scss">
@import "./GridView.scss";
</style>