<template>
    <!-- 参考ページ
    https://qiita.com/ykoizumi0903/items/9a1bf871f477651817a8 -->

    <div class="form-group">
        <div class="form-group" :class="{'has-error': errors.has('entry.'+item.name) || errors.has('entry.'+item.name+'.other_option_response')}">
            <label class="form-label" :for="'entry.'+item.name">{{item.question}}</label>
            <!-- テキスト -->
            <template v-if="item.questiontype === 'text'">
              <input
              class="form-input"
              type="text"
              :area-label="item.question"
              :id="'entry.'+item.name" :name="'entry.'+item.name" :data-vv-as="item.question"
              v-model="defalut_value"
              v-validate="item.validate === true ? 'required' : item.validate"
              :placeholder="item.placeholder">
            </template>
            <!-- テキストエリア -->
            <template v-else-if="item.questiontype === 'textarea'">
              <textarea
              class="form-input"
              :id="'entry.'+item.name" :name="'entry.'+item.name" :data-vv-as="item.question"
              v-model="defalut_value"
              v-validate="item.validate === true ? 'required' : item.validate"
              :placeholder="item.placeholder">
              </textarea>
            </template>
            <!-- ラジオボタン -->
            <template v-else-if="item.questiontype === 'radio'">
              <div class="input-group" v-for="(option, ansnum) in options_with_freeanswer" :key="option">
                <label
                class="form-radio"
                @click="if(option === '__other_option__') focus('entry.'+item.name+'.other_option_response')">
                  <input
                  type="radio"
                  :id="'q'+index+'_a'+ansnum"
                  :name="'entry.'+item.name" :data-vv-as="item.question"
                  :value="option"
                  v-model="defalut_value"
                  v-validate="item.validate === true ? 'required' : item.validate">
                  <i class="form-icon"></i>
                  <span>{{option !== '__other_option__' ? option : item.freeanswer}}</span>
                </label>
                <input
                v-if="option === '__other_option__'"
                type="text" class="form-input"
                :id="'entry.'+item.name+'.other_option_response'"
                :name="'entry.'+item.name+'.other_option_response'" :data-vv-as="item.question"
                v-validate="(item.validate === true ? 'required' : item.validate) && defalut_value == '__other_option__' ? 'required' : false"
                @input="check('q'+index+'_a'+ansnum)" @click="check('q'+index+'_a'+ansnum)">
              </div>
            </template>
            <!-- チェックボックス -->
            <template v-else-if="item.questiontype === 'checkbox'">
              <div class="input-group" v-for="(option, ansnum) in options_with_freeanswer" :key="option">
                <label :class="Array.isArray(item.options) ? 'form-checkbox' : 'form-switch'">
                  <input
                  type="checkbox" :id="'q'+index+'_a'+ansnum"
                  :name="'entry.'+item.name" :data-vv-as="item.question"
                  :value="Array.isArray(item.options) ? option : selected_value"
                  v-model="selected_value"
                  v-validate="item.validate === true ? 'required' : item.validate"
                  @click="if(option === '__other_option__') focus('q'+index+'_freeanswer', 'q'+index+'_a'+ansnum)">
                  <i class="form-icon"></i>
                  <span>{{option !== '__other_option__' ? option : item.freeanswer}}</span>
                </label>
                <input
                v-if="option === '__other_option__'"
                type="text" class="form-input"
                :id="'q'+index+'_freeanswer'"
                :name="'entry.'+item.name+'.other_option_response'" :data-vv-as="item.question"
                v-validate="item.validate && selected_value.includes('__other_option__') ? 'required' : false"
                @input="check('q'+index+'_a'+ansnum)" @click="check('q'+index+'_a'+ansnum)">
              </div>
            </template>
            <!-- プルダウン -->
            <template v-else-if="item.questiontype === 'pulldown'">
              <select class="form-select" v-model="defalut_value"
              :id="'entry.'+item.name" :name="'entry.'+item.name" :data-vv-as="item.question"
              v-validate="item.validate === true ? 'required' : item.validate">
                <option disabled value="">{{PulldownInitialMessage}}</option>
                <!-- <option v-for="(option, index) in item.options" :value="option" :key="option">{{option}}</option> -->
                <option v-for="option in item.options" :value="option" :key="option">{{option}}</option>
              </select>
            </template>
            <!-- 警告メッセージ -->
            <p v-if="errors.has('entry.'+item.name) || errors.has('entry.'+item.name+'.other_option_response')" class="form-input-hint">
              <template v-if="errors.has('entry.'+item.name)">{{ errors.first('entry.'+item.name) }}</template>
              <template v-else>{{ errors.first('entry.'+item.name+'.other_option_response') }}</template>
            </p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
    locale: 'ja',
    events: 'input|blur|focus'
});

export default {
    props: ['item', 'index'],
    inject: ['$validator'],
    data: () => {
        return {
            PulldownInitialMessage: '選択してください',
            defalut_value: null,
            selected_value: false,
        }
    },
    created: function() {
        this.defalut_value = this.item.initialvalue  ? this.item.initialvalue  : null;
        this.selected_value = Array.isArray(this.item.options) ? [] : false // Array.isArray()は配列かどうか判別する
    },
    computed: {
      options_with_freeanswer: function() {   // Not Use
        var options = this.item.options
        if(this.item.freeanswer && Array.isArray(options)) {
          return options.concat(['__other_option__'])
        } else if(!Array.isArray(options)){
          return [options]
        } else {
          return options
        }
      }
    },
    methods: {
      temp: function() {
        // console.log(this.item)
        console.log(this.defalut_value)
        console.log(this.selected_value)
      },
      check: function(id){
        var target = document.getElementById(id);
        if(!target.checked) target.click() // IDのclick
      },
      focus: function(textid, checkboxid) {
        if(!checkboxid || document.getElementById(checkboxid).checked) {
          document.getElementById(textid).focus()
        }
      }   },
}


</script>