<template>
  <ul class="c-headerMenu">
    <li class="c-headerMenu__item"
      v-for="(link, index) in menu"
      :key="index"
    >
      <a class="c-headerMenu__link"
        :href="link.url"
        v-html="link.title"
      />
      <ul class="c-headerDrop"
        v-if="link.links.length > 0"
      >
        <li class="c-headerDrop__item"
           v-for="(link, index) in link.links"
          :key="index"
        >
          <a class="c-headerDrop__link"
            :href="link.url"
            v-html="link.title"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
@import 'settings/index';
@import 'tools/index';

.c-headerMenu {
  @mixin flex row, flex-end, center;
  border-top: none;
  padding: 0;
}
.c-headerMenu__item {
  position: relative;
  margin-left: 30px;
  &:hover {
    .c-headerDrop {
      display: block;
    }
  }
}
.c-headerMenu__link, .c-headerDrop__link {
  display: block;
  color: $color-black-dark;
  font-family: $font-raleway;
  font-weight: 600;
  font-size: 15px;
  line-height: 40px;
  @media (--desktop) {
    font-size: 16px;
    line-height: 80px;
  }
  &:hover {
    color: $color-blue;
    opacity: 1;
  }
}
.c-headerMenu__item:last-child > .c-headerMenu__link {
  @mixin button;
  @mixin button-blue;
  text-transform: capitalize;
  font-size: 15px;
  line-height: 1;
  padding: 8px 30px;
}
.c-headerDrop {
  display: none;
  position: absolute;
  margin-top: -8px;
  width: auto;
  min-width: 180px;
  background-color: white;
  padding: 15px 0;
  border-radius: 5px;
  box-shadow: $box-shadow-header-drop;
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    background-color: #fff;
  }
  &:before {
    top: -7px;
    left: 30px;
    transform: rotate(45deg);
    width: 17px;
    height: 17px;
    border-radius: 3px;
    box-shadow: $box-shadow-header-drop;
  }
  &:after {
    top: 0;
    left: 0;
    width: 100%;
    height: 15px;
    border-radius: 5px;
  }
}
.c-headerDrop__link {
  padding: 0 24px;
  font-size: 15px;
  line-height: 32px;
  white-space: nowrap;
  &:hover {
    background-color: $bg-gray;
  }
}

</style>
