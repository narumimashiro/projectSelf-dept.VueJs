export default {
    formdata: {
      doc: 'https://docs.google.com/forms/d/e/1FAIpQLScbgOxqAbC_eMrr4wti-3vkMe4LjryQSkryoLHQbzoSdSwdsQ/viewform?usp=sf_link',
      survey: [
        {
          name: 1535764502,
          question: '名前* (Name)',
          questiontype: 'text',
          label: 'username',
          validate: true
        },
        {
          name: 957897478,
          question: 'メールアドレス* (e-mail)',
          questiontype: 'text',
          label: 'email',
          placeholder: 'abcde@example.com',
          validate: 'required|email'
        },
        {
          name: 726048365,
          question: '都道府県* (Prefecture)',
          questiontype: 'pulldown',
          options: ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県'],
          validate: 'required'
        },
        {
          name: 662179179,
          question: '年齢* (Age)',
          questiontype: 'radio',
          initialvalue: '10代(10\'s)',
          options: ['10代(10\'s)','20代(20\'s)','30代(30\'s)','40代(40\'s)','それ以上(50 over)'],
          validate: 'required'
        },
        {
          name: 388885174,
          question: 'お問い合わせ内容* (Inquiry)',
          questiontype: 'textarea',
          validate: 'required'
        },
        {
          name: 1126109834,
          question: '利用規約に同意',
          questiontype: 'checkbox',
          options: '利用規約に同意する',
          validate: 'required'
        }
      ]
    },
    setFormData: function() {
      return this.formdata;
    }
    
    }
    