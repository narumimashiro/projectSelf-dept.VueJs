<template>
    <div class="trial-area">
        <h1> 勉強の時に参考にしたサイトなどをメモしておくところ </h1>
        <div class="image-slide-area">
           <image-slider image_kind="night_code" />
        </div>
        <div class="image-slide-area">
           <image-slider image_kind="prsk" />
        </div>
        <hr>
        <div class="input-coontents">
            <label class="input-form">Name :
                <input type="text" v-model="dispName">
            </label>
            <label class="input-form">URL : 
                <input type="text" v-model="urlPath">
            </label>
        </div>
        <button type="button" @click="registerRefData">Register</button>
        <hr>
            <!-- オシャレ箇条書きCSS -->
            <!-- https://saruwakakun.com/html-css/reference/ul-ol-li-design -->
        <table class="ref-table">
            <thead style="background-color:yellow">
                <td>No.</td>
                <td>Name</td>
                <td>URL</td>
            </thead>
            <tbody>
                <tr v-for="(item, index) in listData" :key="item.key">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.key }}</td>
                    <td>{{ item.value }}</td>
                    <td><button class="btn-jump" @click="jumpToUrl(item.value)">Jump to URL</button></td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="check-store-area">
            <input type="text" v-model="storeValue">
            <button @click="inputStore">Input Store</button><br>
            <span>{{ input_value }}</span>
        </div>
        <hr>
    </div> 
</template>
<!--
    ■ やってみたいことメモ
    ・Inputのところ薄い文字でactiveになったら文字が消えるようにしたい。
    ・ファイル取得はGettersでやってみたい
-->

<script>
// 定義まとめ
import reference_sites from '@/store/modules/data_storage/reference_sites.json';
import ImageSlider from '@/components/layouts/ImageSlider.vue'

export default {
    data: () => {
        return {
            disp_name: '',
            url_path: '',
            ref_sites_data: reference_sites,
            site_list: [],
            store_value: '',
        }
    },
    components: {
        ImageSlider,
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
        urlPath: {
            get() {
                return this.url_path;
            },
            set(value) {
                this.url_path = value;
            }
        },
        listData: function() {
            this.ref_sites_data.reference.forEach((el, index) => {
                this.site_list[index] = { key:el.name, value:el.url };
            })
            return this.site_list;
        },
        storeValue: {
            get() {
                return this.store_value;
            },
            set(value) {
                this.store_value = value;
            }
        },
        input_value: function() {
            return this.$store.getters.getInputString;
        }
    },
    methods: {
        registerRefData: function() {
            this.site_list[this.site_list.length] = { key:this.disp_name, value:this.url_path };
        },
        jumpToUrl: function(url) {
            window.open(url);
        },
        inputStore: function() {
            // try to mutations
            // this.$store.commit('setInputString', this.store_value);
            // try to actions
            this.$store.dispatch('setInputString', this.store_value);
        },
    },
}
</script>
<style>
.input-coontents {
    display: flex;
    flex-flow: column;
    /* margin: 0 auto;は、ブロックレベル要素自体を中央揃えにするプロパティ指定 */
    margin: 0 auto;
    /* max-widthとは<div>、<p>など、内容領域における幅の最大値を指定するプロパティ */
    max-width: 240px;
}
.input-form {
    padding-block: 2px;
    margin: 0 0 0 auto;
}
.ref-table {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    max-width: 1000px;
}
.image-slide-area {
    width: 100%;
    /* 任意の要素にアスペクト比を設定することができる */
    aspect-ratio: 16/9;
}
</style>