import { reactive } from 'vue';
import { getCurrentInstance, onMounted, ref } from 'vue';

export const useDossierManage = () => {
  const { proxy } = getCurrentInstance();

  const headers = reactive([
    {
      text: "dossier_code", value: "dossier_code",
      sortable: true, width: 100,
    },
    {
      text: "contract_code", value: "contract_code",
      sortable: true, width: 100,
    },
    {
      text: "bookmark_type_code", value: "bookmark_type_code",
      sortable: true, width: 100,
    },
    {
      text: "customer",
      value: "customer", width: 100,
      sortable: true,
    },
    {
      text: "dosage_form",
      value: "dosage_form", width: 100,
      sortable: true,
    },
    {
      text: "product_name",
      value: "product_name",
      sortable: true,
      width: 100,
    },
    {
      text: "api",
      value: "api",
      sortable: true,
      width: 50,
    },
    {
      text: "manufacturer",
      value: "manufacturer",
      sortable: true,
      width: 100,
    },
    {
      text: "applicant",
      value: "applicant",
      sortable: true,
      width: 100,
    },
    {
      text: "submission_code",
      value: "submission_code",
      sortable: true,
      width: 100,
    },
    {
      text: "submission_date",
      value: "submission_date_string",
      sortable: true,
      width: 100,
    },
    {
      text: "status",
      value: "status",
      sortable: true,
      width: 100,
    },
    {
      text: "status_date",
      value: "status_date_string",
      sortable: true,
      width: 100,
    },
    {
      text: "visa_no",
      value: "visa_no",
      sortable: true,
      width: 100,
    },
    {
      text: "note",
      value: "note",
      sortable: true,
      width: 50,
    },
    {
      text: "Tùy chọn", value: "operation",
      class: "operation",
      width: 80
    }
  ]);

  const filterData = reactive([
    {
      field: "All",
      field_name: 'Tất cả',
    },
    {
      field: "dossier_code",
      field_name: 'dossier_code',
    },
    {
      field: "contract_code",
      field_name: 'contract_code',
    },
    {
      field: "bookmark_type_code",
      field_name: 'bookmark_type_code',
    },
    {
      field: "customer",
      field_name: 'customer',
    },
    {
      field: "dosage_form",
      field_name: 'dosage_form',
    },
    {
      field: "product_name",
      field_name: 'product_name',
    },
    {
      field: "api",
      field_name: 'api',
    },
    {
      field: "manufacturer",
      field_name: 'manufacturer',
    },
    {
      field: "applicant",
      field_name: 'applicant',
    },
    {
      field: "submission_code",
      field_name: 'submission_code',
    },
    {
      field: "submission_date_string",
      field_name: 'submission_date_string',
    },
    {
      field: "status",
      field_name: 'status',
    },
    {
      field: "status_date_string",
      field_name: 'status_date_string',
    },
    {
      field: "visa_no",
      field_name: 'visa_no',
    },
    {
      field: "note",
      field_name: 'note',
    },
  ]);

  return {
    headers,
    filterData,
  }
}