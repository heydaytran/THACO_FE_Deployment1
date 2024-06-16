import { reactive } from 'vue';
import { getCurrentInstance, onMounted, ref } from 'vue';

export const useTimelineManage = () => {
  const { proxy } = getCurrentInstance();
  
  const headers = reactive([
    {
      text: "checker",
      value: "checker",
      sortable: true,
      width: 220,
    },
    {
      text: "time_sheet_code",
      value: "time_sheet_code",
      sortable: true,
      width: 100,
    },
    {
      text: "bookmark_type_code",
      value: "bookmark_type_code",
      sortable: true,
      width: 100,
    },
    {
      text: "task",
      value: "task",
      sortable: true,
      width: 200,
    },
    {
      text: "target",
      value: "target",
      sortable: true,
    },
    {
      text: "deadline_customer_date",
      value: "deadline_customer_date",
      sortable: true,
      width: 100,
    },
    {
      text: "deadline_checker_date",
      value: "deadline_checker_date",
      sortable: true,
      width: 80,
    },
    {
      text: "warning",
      value: "warning",
      sortable: true,
      width: 80,
    },
  ]);
  const filterData = reactive([
    {
      field: "All",
      field_name: 'Tất cả',
    },
    {
      field: "checker",
      field_name: 'checker',
    },
    {
      field: "time_sheet_code",
      field_name: 'time_sheet_code',
    },
    {
      field: "bookmark_type_code",
      field_name: 'bookmark_type_code',
    },
    {
      field: "task",
      field_name: 'task',
    },
    {
      field: "target",
      field_name: 'target',
    },
    {
      field: "deadline_customer_date",
      field_name: 'deadline_customer_date',
    },
    {
      field: "deadline_checker_date",
      field_name: 'deadline_checker_date',
    },
    {
      field: "warning",
      field_name: 'warning',
    },
  ]);

  return {
    headers,
    filterData,
  }
}
