import BaseAPI from '@/apis/base/baseapi.js';
import commonF from '@/commons/commonFunction.js';
import httpClient from '@/apis/base/httpClient.js';

class TimeSheetAPI extends BaseAPI {
    controllerName = 'TimeSheets';


    /**
     * Lấy dữ liệu Timeline
     */
    async getTimeline(payload) {
        let request = {
            url: [this.getAPIUrl(), 'timeline'].join('/'),
            data: payload
        };
        return httpClient.postAsync(request, true);
    }
    /**
     * Lấy dữ liệu Calculator
     */
    async getCalculator(payload) {
        let request = {
            url: [this.getAPIUrl(), 'calculator'].join('/'),
            data: payload
        };
        return httpClient.postAsync(request, true);
    }

    /**
     * Xuất khẩu timeline
     */
    async exportExcelTimeline(payload) {
        let request = {
            url: [this.getAPIUrl(), 'ExcelTimeline'].join('/'),
            data: payload
        };
        return httpClient.postAsync(request, true);
    }
    /**
     * Xuất khẩu Calculator
     */
    async exportExcelCalculator(payload) {
        let request = {
            url: [this.getAPIUrl(), 'ExcelCalculator'].join('/'),
            data: payload
        };
        return httpClient.postAsync(request, true);
    }
}

export default new TimeSheetAPI();