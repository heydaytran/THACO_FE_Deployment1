<template>
  <div class="base-list-manage timeline-manage">
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="toolbar-title">Timeline</div>
        <div class="toolbar-filter ml-4">
          <filter-grid
            v-model="filterGrid"
            :fields="filterData"
            @update:modelValue="(dataFilter) => filterGridView(dataFilter)"
            :widthCombo="180"
          />
        </div>
      </div>
      <div class="toolbar-right">
        <div
          class="icon24 export-excel cursor-pointer mr-4"
          title="Xuất khẩu"
          @click="exportExcel"
        ></div>
        <div
          class="icon24 reload cursor-pointer mr-4"
          title="Lấy lại dữ liệu"
          @click="refresh"
        ></div>
      </div>
    </div>
    <div class="container-grid">
      <grid-view
        ref="gridView"
        :api="api"
        :fields="[
          'time_sheet_target_id',
          'checker',
          'time_sheet_code',
          'task',
          'target',
          'deadline_checker_date',
          'warning',
        ]"
        :headers="headers"
        funcData="getTimeline"
        :filters="filters"
      >
      </grid-view>
    </div>
  </div>
</template>

<script>
import gridView from "@/components/gridView/GridView.vue";
import { useTimelineManage } from "../timeline/TimelineManage.js";
import timesheetAPI from "@/apis/components/timesheetAPI.js";
import { getCurrentInstance } from "vue";
import baseList from "@/views/baseList";
export default {
  extends: baseList,
  components: { gridView },
  setup() {
    const { proxy } = getCurrentInstance();
    const { headers, filterData } = useTimelineManage();

    function refresh() {
      proxy.$refs.gridView.serverOptions.sortBy = [];
      proxy.$refs.gridView.serverOptions.sortType = [];
    }
    async function exportExcel(){
      const me = proxy;
      let param = me.$refs.gridView.lastParam;
      param.page = 1;
      param.size = 10000;
      if (param) {
        let data = await timesheetAPI
          .exportExcelTimeline(param);
        let downloadLink = document.createElement('a');
        downloadLink.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + data;
        downloadLink.download = `Timeline.xlsx`;
        downloadLink.click();
        return data;
      }
    }
    return {
      headers,
      api: timesheetAPI,
      refresh,
      filterData,
      exportExcel,
    };
  },
};
</script>

<style lang="scss">
@import "@/views/admin/timesheet/TimeSheetManage.scss";
</style>