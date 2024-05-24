<template>
  <div class='loginContainer'>
    <div class='loginForm'>
      <div class='titleBox'>
        <div class="title">Login to account</div>
        <div class="subTitle">Please enter your email and password to continue</div>
      </div>
      <div class="inputBox">
        <div class="titleText">Email address</div>
        <input class="inputText" placeholder="Email address" />
      </div>
      <div class="inputBox">
        <div class="passwordTitle">
          <div class="titleText">Password</div>
          <div class="titleText">Forget Password?</div>
        </div>
        <input class="inputText" placeholder="Enter password" type="password" />
        <div class="checkInput">
          <input class="checkInput" type="checkbox" />
          <div class="titleText">Remember Password</div>
        </div>
      </div>
      <div class="buttonBox">
        <div style="width: 100%;">
          <MainButton title="Sign In" />
        </div>
        <div class="titleText">Don't have an account? <span> Create Account</span></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import MainButton from '@/components/mainButton.vue';

  @Options({
    components: {
      MainButton,
    },
  })
  export default class LoginView extends Vue {}
</script>
<style lang="scss">
  .loginContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    .loginForm {
      padding: 60px;
      background-color: #00563F;
      color: #FFFFFF;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      
      .titleBox {
        text-align: center;
        .title {
          font-size: 32px;
          font-weight: 700;
        }
        .subTitle {
          font-size: 18px;
          opacity: 0.8;
          margin-top: 10px;
        }
      }
      .inputBox {
        display: flex;
        flex-direction: column;
        .titleText {
          opacity: 0.8;
        }
        .passwordTitle {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .inputText {
          flex-grow: 1;
          outline: none;
          border: none;
          padding: 16px;
          border-radius: 5px;
          margin-top: 15px;
          font-family: 'PrimaryFont';
          font-size: 18px;
          font-weight: 600;
          &::placeholder {
            font-family: 'PrimaryFont';
          }
        }
        .checkInput {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 10px;
          .checkInput {
            width: 20px;
            height: 20px;
            margin: 0px;
          }
        }
      }
      .buttonBox {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin: auto;
        .titleText {
          opacity: 0.8;
          span {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>