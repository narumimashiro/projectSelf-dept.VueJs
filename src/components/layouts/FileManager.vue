<template>
  <div>
    <div class="file-manager">
      <label class="input">Name :
        <input type="text" class="input-form" v-model="dispName">
      </label>
      <label class="input">e-mail :
        <input type="text" class="input-form" v-model="mailAddress">
      </label>
    </div>
    <button class="submit-btn" @click="submitGET">GET</button>
    <button class="submit-btn" @click="submitPOST">POST</button>
    <p>
      POST Response result {{ res_result }}<br>
      POST Response message {{ res_message }}<br>
    </p>

    <p>
      GET Data name {{ res_name }}<br>
      GET Data e-mail {{ res_address }}
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      disp_name: "",
      mail_address: "",
      res_result: "",
      res_message: "",
      res_name: "",
      res_address: "",
    }
  },
  computed: {
    dispName: {
      get() {
        return this.disp_name;
      },
      set(value) {
        this.disp_name = value;
      }
    },
    mailAddress: {
      get() {
        return this.mail_address;
      },
      set(value) {
        this.mail_address = value;
      }
    }
  },
  methods: {
    submitGET: function() {
      const url = 'http://127.0.0.1:9696/cgi-bin/api_file.py';
      const file_name = 'test.json';
      const data = JSON.stringify({'name': this.disp_name, 'e_mail': this.mail_address});
      axios.get(url, {
        params: {
          file: file_name,
          json: data,
        }
      })
      .then(res => {
        this.res_result = res.data['result'];
        this.res_message = res.data['message'];
        let json_obj = JSON.parse(res.data['json']);
        this.res_name = json_obj.name;
        this.res_address = json_obj.e_mail;
      })  // データをresultに格納
    },
    submitPOST: async function() {
      // async await についてはここeに解説ある
      // https://qiita.com/hinako_n/items/e2cf6fd9dc6e9d069901
      const url = 'http://127.0.0.1:9696/cgi-bin/api_file.py';
      const file_name = 'test.json';
      const data = JSON.stringify({'name': this.disp_name, 'e_mail': this.mail_address});
      const res = await axios.post(url, {
        file: file_name,
        json: data,
      })
      this.res_result = res.data['result'];
      this.res_message = res.data['message'];
    },
  },
}
</script>

<style>
.file-manager {
  display:flex;
  flex-flow: column;
  width: 50%;
  margin: 0 auto;
}
.input-form {
  width: 100%;
}
.submit-btn {
  margin-top: 5em;
}
</style>