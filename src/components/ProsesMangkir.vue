<template>
    <b-modal id="mdlYesNoNotesProses" title="Detail Mangkir">
    <div slot="modal-footer" class="w-100">
    <b-btn @click="$bvModal.hide('mdlShowMangkir')">
        OK
    </b-btn>
</div>
    <b-table class="tableShowMangkir" responsive :items="items"></b-table>
    <div slot="modal-footer" class="w-100">
        <b-btn @click="$bvModal.hide('mdlShowMangkir')">
            OK
        </b-btn>
    </div>
  </b-modal>
</template>

<script>
export default {

}
</script>

<style>

</style>