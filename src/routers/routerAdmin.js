export default [{
  path: '/admin',
  component: () => import("@/views/admin/AdminPage.vue"),
  meta: {
    anonymous: false,
    role: 1
  },
  name: 'Trang tổng quan',
  redirect: '/admin/timesheet',
  children: [
    {
      path: 'taiLieuGoc',
      component: () => import("@/views/admin/taiLieuGoc/TaiLieuGocManage.vue"),
      name: 'TaiLieuGoc',
      meta: {
        anonymous: false,
        role: 1
      }
    }
    , {
      path: 'timesheet',
      component: () => import("@/views/admin/timesheet/TimeSheetManage.vue"),
      name: 'Danh sách Hồ sơ',
      meta: {
        anonymous: false,
        role: 1
      }
    },
    {
      path: 'bookmarkType',
      component: () => import("@/views/admin/bookmarkType/BookmarkTypeManage.vue"),
      name: 'Loại hồ sơ',
      meta: {
        anonymous: false,
        role: 1
      }
    },
    {
      path: 'manufacturer',
      component: () => import("@/views/admin/manufacturer/ManufacturerManage.vue"),
      name: 'Manufacturer',
      meta: {
        anonymous: false,
        role: 1
      }
    }, {
      path: 'timeline',
      component: () => import("@/views/admin/timeline/TimelineManage.vue"),
      name: 'Timeline',
      meta: {
        anonymous: false
      }
    }, {
      path: 'calculator',
      component: () => import("@/views/admin/calculator/CalculatorManage.vue"),
      name: 'Calculator',
      meta: {
        anonymous: false
      }
    }, {
      path: 'customer',
      component: () => import("@/views/admin/customer/CustomerManage.vue"),
      name: 'Customer',
      meta: {
        anonymous: false,
      }
    }, {
      path: 'dossier',
      component: () => import("@/views/admin/dossier/DossierManage.vue"),
      name: 'Dossier',
      meta: {
        anonymous: false,
      }
    }, {
      path: 'checker',
      component: () => import("@/views/admin/checker/CheckerManage.vue"),
      name: 'Nhân viên',
      meta: {
        anonymous: false,
      }
    }
  ]
}]