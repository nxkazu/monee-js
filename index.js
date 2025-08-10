const axios = require('axios');

class Monee {

  constructor(SHOP_UUID) {
    this.SHOP_UUID = SHOP_UUID;
    this.API_URL = 'https://api.monee.pro';
  }

  async order_create(amount, comment, expire, options = {}) {
    const api_url = `${this.API_URL}/payment/create`;
    const data = {
      shop_to: this.SHOP_UUID,
      sum: parseFloat(amount.toFixed(2)),
      comment: comment,
      expire: expire,
      ...options
    };

    try {
      const response = await axios.post(api_url, data, {
        timeout: 5000 
      });

      if (response.status === 200) {
        if (response.data.status === 'success') {
          return response.data;
        } else {
          return `Error: ${response.data.message || 'Unknown error'}`;
        }
      } else {
        return `Failed to get response: ${response.status}`;
      }
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        return 'Timeout';
      }
      if (error.response) {
        return `API Error: ${error.response.data.message || error.response.statusText}`;
      }
      return `Request Error: ${error.message}`;
    }
  }

  async order_info(order_id) {
    const api_url = `${this.API_URL}/payment/info`;
    const data = {
      shop_uuid: this.SHOP_UUID,
      order_uuid: order_id
    };

    try {
      const response = await axios.post(api_url, data, {
        timeout: 5000 
      });

      if (response.status === 200) {
        if (['success', 'waiting', 'expired'].includes(response.data.status)) {
          return response.data;
        } else {
          return `Error: ${response.data.message || 'Unknown error'}`;
        }
      } else {
        return `Failed to get response: ${response.status}`;
      }
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        return 'Timeout';
      }
      if (error.response) {
        return `API Error: ${error.response.data.message || error.response.statusText}`;
      }
      return `Request Error: ${error.message}`;
    }
  }
}

module.exports = Monee;