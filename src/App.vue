<script setup lang="ts">
import { ref } from 'vue';
import BorderWrapper from './components/BorderWrapper.vue'
import { SmallContent, MediumContent, LargeContent } from '../example/content/index';

const state = ref({
  topPosition: 0.05,
  rightPosition: 0.1,
  bottomPosition: 0.9,
  leftPosition: 0.9,
  topOffset: 22,
  rightOffset: 22,
  bottomOffset: 22,
  leftOffset: 22,
  color: "#00bcf1",
  borderWidth: 5,
  innerPadding: 30,
  borderRadius: 15,
  borderType: "solid",
});
const borderTypes = ref([
  { id: 'dashed', name: 'Dashed' },
  { id: 'dotted', name: 'Dotted' },
  { id: 'double', name: 'Double' },
  { id: 'groove', name: 'Grove' },
  { id: 'hidden', name: 'Hidden' },
  { id: 'inset', name: 'Inset' },
  { id: 'none', name: 'None' },
  { id: 'outset', name: 'Outset' },
  { id: 'ridge', name: 'Ridge' },
  { id: 'solid', name: 'Solid' }
])
const contentTypes = ref([
  { id: 'small', name: 'Small' },
  { id: 'medium', name: 'Medium' },
  { id: 'large', name: 'Large' },
])

const contentType = ref('medium')
const topEle = ref(true)
const rightEle = ref(true)
const bottomEle = ref(true)
const leftEle = ref(true)

</script>
<template>
  <div class="">
    <div class="header-wrapper">
      <div>
        <img :style="{ width: '200px' }" src="./assets/vue_wrp_6.PNG" alt="vue border wrapper logo" />
      </div>
      <div class="header-right">
        <a class="submit-bug" href="https://github.com/sivareddyuppathi/vue-border" target="_blank">
          GITHUB
        </a>
        <a class="submit-bug" href="https://github.com/sivareddyuppathi/vue-border/issues/new" target="_blank">
          SUBMIT A BUG
        </a>
      </div>
    </div>
    <div class="card" :style="{ '--elevation': '2' }">
      <BorderWrapper :borderColor="state.color" :borderWidth="state.borderWidth + 'px'"
        :borderRadius="state.borderRadius + 'px'" :innerPadding="state.innerPadding + 'px'"
        :borderType="state.borderType" :topPosition="state.topPosition" :topOffset="state.topOffset + 'px'"
        :rightPosition="state.rightPosition" :rightOffset="state.rightOffset + 'px'"
        :bottomPosition="state.bottomPosition" :bottomOffset="state.bottomOffset + 'px'"
        :leftPosition="state.leftPosition" :leftOffset="state.leftOffset + 'px'">
        <template v-if="topEle" #topElement>
          <div :style="{ width: '200px', paddingLeft: '4px', paddingRight: '4px' }">
            <img :style="{ width: '200px' }" src="./assets/vue_wrp_6.PNG" alt="vue border wrapper logo" />
          </div>
        </template>
        <template v-if="rightEle" #rightElement>
          <div :style="{ height: '50px', paddingTop: '4px', paddingBottom: '4px', alignSelf: 'flex-end' }">
            <img :style="{ height: '50px' }"
              src="./assets/react_border_wrapper_icon.png"
              alt="vue border wrapper logo" />
          </div>
        </template>
        <template v-if="leftEle" #leftElement>
          <div :style="{ height: '50px', paddingTop: '4px', paddingBottom: '4px', alignSelf: 'flex-start', }">
            <img :style="{ height: '50px' }"
              src="./assets/react_border_wrapper_icon.png"
              alt="vue border wrapper logo" />
          </div>
        </template>
        <template v-if="bottomEle" #bottomElement>
          <div :style="{ width: '200px', paddingLeft: '4px', paddingRight: '4px', alignSelf: 'flex-end' }">
            <img :style="{ width: '200px' }" src="./assets/vue_wrp_6.PNG" alt="vue border wrapper logo" />
          </div>
        </template>
        <template #default>
          <SmallContent v-if="contentType === 'small'" />
          <MediumContent v-if="contentType === 'medium'" />
          <LargeContent v-if="contentType === 'large'" />
        </template>
      </BorderWrapper>

      <div class="separator">Check the component by changing the below props</div>

      <div class="container">
        <div class="did-floating-label-content">
          <select class="did-floating-select" v-model="contentType">
            <option v-for="(type) in contentTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
          </select>
          <label class="did-floating-label">Content Size</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.color">
          <label class="did-floating-label">Color</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.borderWidth">
          <span class="did-floating-label-right-content">
            px
          </span>
          <label class="did-floating-label">Border Width</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.innerPadding">
          <span class="did-floating-label-right-content">
            px
          </span>
          <label class="did-floating-label">Inner Padding</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.borderRadius">
          <span class="did-floating-label-right-content">
            px
          </span>
          <label class="did-floating-label">Border Radius</label>
        </div>
        <div class="did-floating-label-content">
          <select class="did-floating-select" v-model="state.borderType">
            <option v-for="(type) in borderTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
          </select>
          <label class="did-floating-label">Border Type</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.topPosition">
          <span class="did-floating-label-right-content">
            %
          </span>
          <label class="did-floating-label">Top Position</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.rightPosition">
          <span class="did-floating-label-right-content">
            %
          </span>
          <label class="did-floating-label">Right Position</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.bottomPosition">
          <span class="did-floating-label-right-content">
            %
          </span>
          <label class="did-floating-label">Bottom Position</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.leftPosition">
          <span class="did-floating-label-right-content">
            %
          </span>
          <label class="did-floating-label">Left Position</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.topOffset">
          <span class="did-floating-label-right-content">
            px
          </span>
          <label class="did-floating-label">Top Offset</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.rightOffset">
          <span class="did-floating-label-right-content">
            px
          </span>
          <label class="did-floating-label">Right Offset</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.bottomOffset">
          <span class="did-floating-label-right-content">
            px
          </span>
          <label class="did-floating-label">Bottom Offset</label>
        </div>
        <div class="did-floating-label-content">
          <input class="did-floating-input" type="text" v-model="state.leftOffset">
          <span class="did-floating-label-right-content">
            px
          </span>
          <label class="did-floating-label">Left Offset</label>
        </div>
      </div>

      <div class="separator">Check the component by changing the below Slots</div>
      <div class="container">
        <div class="did-floating-label-content">
          <select class="did-floating-select" v-model="topEle">
            <option :value="true">True</option>
            <option :value="false">False</option>
          </select>
          <label class="did-floating-label">Top Element</label>
        </div>
        <div class="did-floating-label-content">
          <select class="did-floating-select" v-model="rightEle">
            <option :value="true">True</option>
            <option :value="false">False</option>
          </select>
          <label class="did-floating-label">Right Element</label>
        </div>
        <div class="did-floating-label-content">
          <select class="did-floating-select" v-model="bottomEle">
            <option :value="true">True</option>
            <option :value="false">False</option>
          </select>
          <label class="did-floating-label">Bottom Element</label>
        </div>
        <div class="did-floating-label-content">
          <select class="did-floating-select" v-model="leftEle">
            <option :value="true">True</option>
            <option :value="false">False</option>
          </select>
          <label class="did-floating-label">Left Element</label>
        </div>
      </div>

      <div class="separator">Check the component code below</div>

      <div style="
    display: flex;
    align-items: start;
    justify-content: center;
">
        <code style="
    text-align: start;
">
    {{ `
    <BorderWrapper`}}<br />
    &nbsp;{{ `borderColor="${state.color}"` }}<br />
    &nbsp;{{ `borderWidth="${state.borderWidth}px"` }}<br />
    &nbsp;{{ `borderRadius="${state.borderRadius}"px` }}<br />
    &nbsp;{{ `innerPadding="${state.innerPadding}"px` }}<br />
    &nbsp;{{ `borderType="${state.borderType}"` }}<br />
    &nbsp;{{ `topPosition="${state.topPosition}"` }}<br />
    &nbsp;{{ `topOffset="${state.topOffset}"px` }}<br />
    &nbsp;{{ `rightPosition="${state.rightPosition}"` }}<br />
    &nbsp;{{ `rightOffset="${state.rightOffset}"px` }}<br />
    &nbsp;{{ `bottomPosition="${state.bottomPosition}"` }}<br />
    &nbsp;{{ `bottomOffset="${state.bottomOffset}"px` }}<br />
    &nbsp;{{ `leftPosition="${state.leftPosition}"` }}<br />
    &nbsp;{{ `leftOffset="${state.leftOffset}px"` }}<br />
    {{ `>` }}<br />
    <template v-if="topEle">
    <pre>
      {{ `<template #topElement>
          <div :style="{ 
            width: '200px', 
            paddingLeft: '4px', 
            paddingRight: '4px' }"
          >
            <img :style="{ width: '200px' }" 
              src="./assets/react_border_wrapper_logo.png"
              alt="vue border wrapper logo" />
          </div>
      </template>`}}
    </pre>
    </template>
    <br />
    <template v-if="rightEle">
      <pre>
        {{ `<template #rightElement>
          <div :style="{ height: '50px', 
            paddingTop: '4px', 
            paddingBottom: '4px', 
            alignSelf: 'flex-end' }"
          >
            <img :style="{ height: '50px' }" 
              src="./assets/react_border_wrapper_icon.png"
              alt="vue border wrapper logo" />
          </div>
      </template>`}}
    </pre>
    </template>
    <template v-if="bottomEle">
      <pre>
        {{ `<template #bottomElement>
        <div :style="{ width: '200px', 
          paddingLeft: '4px', 
          paddingRight: '4px', 
          alignSelf: 'flex-end' }"
        >
          <img :style="{ width: '200px' }" 
            src="./assets/react_border_wrapper_logo.png" 
            alt="vue border wrapper logo" />
        </div>
      </template>`}}
    </pre>
    </template>
    <template v-if="leftEle">
      <pre>
        {{ `<template #leftElement>
        <div :style="{ height: '50px', 
          paddingTop: '4px', 
          paddingBottom: '4px', 
          alignSelf: 'flex-start', }"
        >
          <img :style="{ height: '50px' }"
            src="./assets/react_border_wrapper_icon.png"
            alt="vue border wrapper logo" />
        </div>
      </template>`}}
    </pre>
    </template>
    {{ `</BorderWrapper>` }}
  </code>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-right {
  display: flex;
  gap: 1rem;
}

.submit-bug {
  color: white;
  text-decoration: none;
}

.header-wrapper {
  background-color: rgb(0, 0, 0);
  column-gap: 13px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 10px;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 2.5rem 0px;
  color: crimson;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 2px solid rgb(80, 22, 34);
}

.separator:not(:empty)::before {
  margin-right: .25em;
}

.separator:not(:empty)::after {
  margin-left: .25em;
}

.card {
  padding: 2rem 0rem;
  text-align: center;
  border-radius: 4px;
  --elevation: 0;
  --epx: calc(var(--elevation) * 1px);

  /* these 2 shadows serve as a border for  0-1 elevation    */
  --shadow1: 0 0 1px rgba(0, 0, 0, .1);
  --shadow2: 0 1px 2px rgba(0, 0, 0, .08);

  --offset-y: calc(var(--epx) + 1px);
  --blur: calc(var(--epx) * 2);
  --spread: calc(var(--epx) * .3);
  --shadow3:
    0 var(--offset-y) var(--blur) var(--spread) rgba(0, 0, 0, 0.2);

  box-shadow:
    var(--shadow1),
    var(--shadow2),
    var(--shadow3);
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 20px;
  font-family: 'Inter', sans-serif;
}

.did-floating-label-content {
  position: relative;
  margin-bottom: 20px;
}

.did-floating-label-right-content {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  transform: translateY(-50%);
  font-weight: 200;
  font-size: small;
  color: #32384A;
}

.did-floating-label {
  color: #1e4c82;
  font-size: 13px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 9px;
  top: 11px;
  padding: 0 5px;
  background: #fff;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.did-floating-input,
.did-floating-select {
  font-size: 12px;
  display: block;
  width: 100%;
  height: 36px;
  padding: 0 13px;
  background: #fff;
  /* color: #323840; */
  border: 1px solid #3D85D8;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;

    ~.did-floating-label {
      top: -8px;
      font-size: 13px;
    }
  }
}

select.did-floating-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 10.8rem !important;
}

select.did-floating-select::-ms-expand {
  display: none;
}

.did-floating-input:not(:placeholder-shown)~.did-floating-label {
  top: -8px;
  font-size: 13px;
}

.did-floating-select:not([value=""]):valid~.did-floating-label {
  top: -8px;
  font-size: 13px;
}

.did-floating-select[value=""]:focus~.did-floating-label {
  top: 11px;
  font-size: 13px;
}

.did-floating-select:not([multiple]):not([size]) {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6'%3E%3Cpath id='Path_1' data-name='Path 1' d='M371,294l4,6,4-6Z' transform='translate(-371 -294)' fill='%23003d71'/%3E%3C/svg%3E%0A");
  background-position: right 15px top 50%;
  background-repeat: no-repeat;
}

.did-error-input {

  .did-floating-input,
  .did-floating-select {
    border: 2px solid #9d3b3b;
    color: #9d3b3b;
  }

  .did-floating-label {
    font-weight: 600;
    color: #9d3b3b;
  }

  .did-floating-select:not([multiple]):not([size]) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6'%3E%3Cpath id='Path_1' data-name='Path 1' d='M371,294l4,6,4-6Z' transform='translate(-371 -294)' fill='%239d3b3b'/%3E%3C/svg%3E%0A");
  }
}

.input-group {
  display: flex;

  .did-floating-input {
    border-radius: 0 4px 4px 0;
    border-left: 0;
    padding-left: 0;
  }
}

.input-group-append {
  display: flex;
  align-items: center;
  /*   margin-left:-1px; */
}

.input-group-text {
  display: flex;
  align-items: center;
  font-weight: 400;
  height: 34px;
  color: #323840;
  padding: 0 5px 0 20px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #3D85D8;
  border-radius: 4px 0 0 4px;
  border-right: none;
}
</style>
