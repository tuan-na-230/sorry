<template>
  <div class="root">
    <div class="border">
      <div class="gif-area">
        <img
          :src="
            !isSuccess
              ? listGif[indexSelectedGif]
              : listGifSuccess[indexSelectedGif]
          "
          class="gif"
        />
      </div>
      <span class="text">{{ !isSuccess ? listText[indexSelectedText] : 'YEAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH' }}</span>
      <div>
        <div class="text text-sorry" v-if="!isSuccess">I'm sorry, forgive me"</div>
        <div class="button-group">
          <button class="button-custom button-no" @click="handleClickNo">
            No
          </button>
          <button class="button-custom button-yes" @click="handleClickYes">
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SorryA",
  data() {
    return {
      isSuccess: false,
      listGif: [
        "https://media.giphy.com/media/ffzhLUixCtlsc/giphy.gif",
        "https://media.giphy.com/media/qA9BnxUPmgWgU/giphy.gif",
        "https://media.giphy.com/media/1miKtEDuir8wDVWd5F/giphy.gif",
        "https://media.giphy.com/media/UMfHH9AAruF2w/giphy.gif",
        "https://media.giphy.com/media/kAC4na628Wljy/giphy.gif",
        "https://media.giphy.com/media/h1nwGupZF7g0jN7rJa/giphy.gif",
        "https://media.giphy.com/media/BGH9MWQegcu84hY9DT/giphy.gif",
        "https://media.giphy.com/media/TU76e2JHkPchG/giphy.gif",
        "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",
        "https://media.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif",
        "https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif",
        "https://media.giphy.com/media/10tIjpzIu8fe0/giphy.gif",
        "https://media.giphy.com/media/lBTpHmb03fo8U/giphy.gif",
        "https://media.giphy.com/media/B2TG4Rx3gPuMw/giphy.gif",
        "https://media.giphy.com/media/3ofSBsd9mptrJHb2ZW/giphy.gif",
        "https://media.giphy.com/media/2BPi4pVYkJQ4MUPa7C/giphy.gif"
      ],
      listGifSuccess: [
        "https://media.giphy.com/media/Go6f5qeQUZF3a/giphy.gif",
        "https://media.giphy.com/media/Fu3OjBQiCs3s0ZuLY3/giphy.gif",
        "https://media.giphy.com/media/i6IqXuLaTdqRW/giphy.gif",
        "https://media.giphy.com/media/QLvRBqfLXCphu/giphy.gif",
        "https://media.giphy.com/media/1136UBdSNn6Bu8/giphy.gif",
        "https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif",
        "https://media.giphy.com/media/sMaW02wUllmFi/giphy.gif",
        "https://media.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.gif",
        "https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif",
        "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
        "https://media.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.gif",
        "https://media.giphy.com/media/aQYR1p8saOQla/giphy.gif",
        "https://media.giphy.com/media/otnqsqqzmsw7K/giphy.gif",
        "https://media.giphy.com/media/mIZ9rPeMKefm0/giphy.gif",
        "https://media.giphy.com/media/MdqE46HziuFJTlIwjw/giphy.gif",
        "https://media.giphy.com/media/F6PFPjc3K0CPe/giphy.gif",
        "https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif",
        "https://media.giphy.com/media/xTiTnyijMsXgn6Bzzy/giphy.gif"
      ],
      listText: [
        "Gomen'nasai",
        "آسف",
        "Désolé",
        "Извини",
        "मुझे माफ़ करें",
        "对不起",
        "вибачте",
        "كەچۈرۈڭ",
        "Uzr so'rayman",
        "Mae'n ddrwg gen i",
        "Mi dispiace",
        "אנטשולדיגט",
        "Ma binu",
        "Ngiyaxolisa",
        "Ua ou faanoanoa",
        "omlouvám se",
        "Жао ми је",
        "ke kopa tšoarelo",
        "Ndine hurombo",
        "මට කණගාටුයි",
        "Prepáč",
        "žal mi je",
        "Waan ka xumahay",
        "Abdi nyungkeun hapunten",
        "Samahani",
        "мебахшӣ",
        "гафу үтенәм",
        "Lo siento",
        "నన్ను క్షమించండి",
        "ฉันเสียใจ",
        "Üzgünüm",
      ],
      indexSelectedGif: 0,
      indexSelectedText: 0,
    };
  },
  methods: {
    handleClickNo() {
      this.isSuccess = false;
      this.indexSelectedGif = Math.floor(Math.random() * this.listGif.length);
      this.indexSelectedText = Math.floor(Math.random() * this.listText.length);
    },
    handleClickYes() {
      this.isSuccess = true;
      this.indexSelectedGif = Math.floor(
        Math.random() * this.listGifSuccess.length
      );
      this.indexSelectedText = Math.floor(Math.random() * this.listText.length);
    },
  },
};
</script>

<style scoped>
.root {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#e66465, #9198e5);
}
.border {
  width: 500px;
  height: 450px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.gif-area {
  display: flex;
  justify-content: center;
}
.text {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
}
.text-sorry {
  margin-bottom: 18px;
}
.gif {
  height: 300px;
  box-shadow: 3px 5px rgb(100, 100, 100);
  border-radius: 5px;
}
.button-group {
  display: flex;
  justify-content: space-between;
}
.button-custom {
  width: 230px;
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  font-size: 18px;
}
.button-no {
  background-color: #ff5252 !important;
  border-color: #ff5252 !important;
}
.button-yes {
  background-color: #009688 !important;
  border-color: #009688 !important;
}
</style>