<template>
  <div :style="{ backgroundColor: bgColor }" class="statusCard">
    <div class="left">
      <div class="iconBox" :style="{ backgroundColor: iconBgColor }">
        <img :src="icon" alt="icon" class="icon" />
      </div>
      <div class="totalNumber">{{ totalNumber }}</div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="right">
      <div class="incresement">
        <img :src="increaseIcon" alt="increase" />
        <div class="increaseText">{{ increaseRate + "%" }}</div>
      </div>
      <div class="decreasement">
        <img :src="decreaseIcon" alt="decrease" />
        <div class="decreaseText">{{ decreaseRate + "%" }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import decreaseIcon from '@/assets/icons/decreaseIcon.svg';
import increaseIcon from '@/assets/icons/increaseIcon.svg';

@Options({
  props: {
    title: String,
    totalNumber: Number,
    increaseRate: Number,
    decreaseRate: Number,
    bgColor: String, 
    icon: String, 
    iconBgColor: String
  }
})

export default class StatusCard extends Vue {
  title!: string 
  totalNumber!: number
  increaseRate!: number
  decreaseRate!: number
  bgColor!: string
  icon!: string
  iconBgColor!: string
  decreaseIcon = decreaseIcon
  increaseIcon = increaseIcon
}
</script>
<style lang="scss">
  .statusCard {
    padding: 24px 35px;
    border-radius: 14px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      .iconBox {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .totalNumber {
        font-size: 28px;
        font-weight: 700;
        line-height: 42px;
        margin-top: 20px;
      }
      .title {
        font-size: 19px;
        font-weight: 500;
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 20px;
      .decreasement {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }
      .incresement {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }
      .increaseText {
        font-size: 17px;
        line-height: 22px;
        font-weight: 600;
        color: #00563F;
      }
      .decreaseText {
        font-size: 17px;
        line-height: 22px;
        font-weight: 600;
        color: #E84545;
      }
    }
  }
</style>