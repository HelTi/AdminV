<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <input v-model="url" type="text" class="form-control" />
                    <!-- <button class="btn btn-sm">encodeURI</button> -->
                    <p>encodeURI：{{encodeurl}}</p>
                    <p>解码：{{decodeurl}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'url',
    data() {
        return {
            url: ''
        }
    },
    computed: {
        encodeurl() {
            return encodeURI(this.url)
        },
        decodeurl() {
            return decodeURI(this.encodeurl)
        }
    },
    methods: {

    }
}
</script>
<style lang="sass">

</style>


