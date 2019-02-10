<template lang="html">
  <div class="u-hidden" id="modal">
    <transition name="overlay-fade">
      <Overlay v-if="contentId" />
    </transition>
    <div class="c-modal">
      <div class="c-modal__box">
      </div>
      <ModalBox
        @closeClick="setModal"
        :contentId="contentId" 
        :setClickEvents="setClickEvents"
      >
        <slot />
      </ModalBox>
    </div>
  </div>
</template>