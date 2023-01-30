<template>
    <div>
        <span>お問い合わせフォーム</span>
        <!-- <div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScbgOxqAbC_eMrr4wti-3vkMe4LjryQSkryoLHQbzoSdSwdsQ/viewform?embedded=true"
            width="640" height="1332" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
        </div> -->
        <form key="1" v-show="!submitted" name="gf_form" method="POST" target="hidden_iframe"
              :action="formdata.doc" @submit.prevent="gf_submit()">
            <google-form v-for="(content, index) in formdata.survey" :item="content" :index="index" :key="content.name"></google-form>
        </form>
    </div>
</template>

<script>
import InquiryFormData from '@/assets/form_data/InquiryFormData';
import GoogleForm from '@/components/layouts/GoogleForm';

export default {
    data: () => {
        return {
            formdata: {},
            submitted: false,
        }
    },
    components: {
        GoogleForm,
    },
    mounted: function() {
      this.formdata = InquiryFormData.setFormData();

      var iframe = document.createElement("iframe");
      iframe.setAttribute('name','hidden_iframe');
      iframe.setAttribute('style','display: none');
      document.body.appendChild(iframe);
    },
    methods: {
      gf_submit: function() {
        this.$validator.validate().then(result => {
           if(!result) {
              return false;
           }
           document.gf_form.submit();
           this.submitted = true;
        }) 
      }
    }
}

</script>

<style>
</style>