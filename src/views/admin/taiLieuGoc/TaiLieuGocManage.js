import { reactive } from 'vue';
import { getCurrentInstance, onMounted, ref } from 'vue';

export const useTaiLieuGocManage = () => {
  const { proxy } = getCurrentInstance();

  const headers = reactive([
    {
      text: "stt",
      value: "stt",
      width: 100,
      sortable: true,
    },
    {
      text: "ngay_nhan",
      value: "ngay_nhan_string",
      sortable: true,
      width: 150,
    },
    {
      text: "ngay_gui",
      value: "ngay_gui_string",
      sortable: true,
      width: 150,
    },
    {
      text: "loai_giay_to",
      value: "loai_giay_to",
      sortable: true,
      width: 150,
    },
    {
      text: "san_pham",
      value: "san_pham",
      sortable: true,
      width: 150,
    },
    {
      text: "ma_tra_cuu_online",
      value: "ma_tra_cuu_online",
      sortable: true,
      width: 150,
    },
    {
      text: "ghi_chu",
      value: "ghi_chu",
      sortable: true,
    },
    {
      text: "Tùy chọn", value: "operation",
      width: 80,
    }
  ]);

  const filterData = reactive([
    {
      field: "All",
      field_name: 'Tất cả',
    },
    {
      field: "stt",
      field_name: 'stt',
    },
    {
      field: "ngay_nhan_string",
      field_name: 'ngay_nhan_string',
    },
    {
      field: "ngay_gui_string",
      field_name: 'ngay_gui_string',
    },
    {
      field: "loai_giay_to",
      field_name: 'loai_giay_to',
    },
    {
      field: "san_pham",
      field_name: 'san_pham',
    },
    {
      field: "ma_tra_cuu_online",
      field_name: 'ma_tra_cuu_online',
    },
    {
      field: "ghi_chu",
      field_name: 'ghi_chu',
    },
  ]);

  return {
    headers,
    filterData,
  }
}