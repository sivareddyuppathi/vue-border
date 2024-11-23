<script setup lang="ts">
import { ref } from 'vue';
import BorderWrapper from './components/BorderWrapper.vue'
const state = ref({
  topPosition: 0.05,
  rightPosition: 0.1,
  bottomPosition: 0.9,
  leftPosition: 0.9,
  topOffset: 22,
  rightOffset: 22,
  bottomOffset: 22,
  leftOffset: 22,
  bottomGap: 4,
  leftGap: 4,
  showLeft: false,
  showRight: true,
  showBottom: false,
  color: "#00bcf1",
  borderWidth: 5,
  innerPadding: 30,
  borderRadius: 15,
  borderType: "solid",
  content: "medium"
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
</script>
<template>
  <div class="card" :style="{ '--elevation': '2' }">
    <BorderWrapper :borderColor="state.color" :borderWidth="state.borderWidth + 'px'"
      :borderRadius="state.borderRadius + 'px'" :innerPadding="state.innerPadding + 'px'" :borderType="state.borderType"
      :topPosition="state.topPosition" :topOffset="state.topOffset + 'px'" :rightPosition="state.rightPosition"
      :rightOffset="state.rightOffset + 'px'" :bottomPosition="state.bottomPosition"
      :bottomOffset="state.bottomOffset + 'px'" :leftPosition="state.leftPosition"
      :leftOffset="state.leftOffset + 'px'">
      <template #topElement>
        <div :style="{ width: '200px', paddingLeft: '4px', paddingRight: '4px' }">
          <img :style="{ width: '200px' }" src="./assets/react_border_wrapper_logo.png"
            alt="react border wrapper logo" />
        </div>
      </template>
      <template #rightElement>
        <div :style="{ height: '50px', paddingTop: '4px', paddingBottom: '4px', alignSelf: 'flex-end' }">
          <img :style="{ height: '50px' }"
            src="https://metroxe.github.io/react-border-wrapper/react_border_wrapper_icon.png"
            alt="react border wrapper logo" />
        </div>
      </template>
      <template #leftElement>
        <div :style="{ height: '50px', paddingTop: '4px', paddingBottom: '4px', alignSelf: 'flex-start', }">
          <img :style="{ height: '50px' }"
            src="https://metroxe.github.io/react-border-wrapper/react_border_wrapper_icon.png"
            alt="react border wrapper logo" />
        </div>
      </template>
      <template #bottomElement>
        <div :style="{ width: '200px', paddingLeft: '4px', paddingRight: '4px', alignSelf: 'flex-end' }">
          <img :style="{ width: '200px' }" src="./assets/react_border_wrapper_logo.png"
            alt="react border wrapper logo" />
        </div>
      </template>
      <template #default>
        <article :style="{ textAlign: 'left', width: '600px' }">
          <h1>Title</h1>
          <h2>Header</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum dapibus porta. Donec non elit
            id mauris imperdiet gravida ut eu tortor. Aenean aliquam facilisis ipsum, id fringilla magna commodo
            sed. Donec vel quam scelerisque purus consequat mollis eu cursus ante. Aenean eros ipsum, sollicitudin
            nec neque sed, venenatis finibus erat. Mauris et ante vel eros venenatis feugiat eu vitae magna.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus cursus
            orci in dignissim efficitur. Nunc volutpat orci sit amet bibendum dapibus.
          </p>
          <h3>Sub-Heading</h3>
          <p>
            Morbi feugiat neque ut ligula euismod viverra. Pellentesque ante massa, ultrices a vehicula vel,
            suscipit quis tellus. Praesent placerat mollis magna, ac vehicula risus placerat ut. Donec
            porttitor
            nisl vel facilisis rhoncus. Sed a consectetur nisi. Aliquam erat volutpat. Nam sed ligula dolor.
            Proin
            vel enim consectetur, interdum libero sed, vulputate est. Maecenas placerat mi massa, at congue
            erat
            convallis a. Suspendisse ut vestibulum lorem. Sed id molestie augue, ac commodo sem. Mauris
            viverra
            sem
            sed porta pharetra.
          </p>
        </article>
      </template>
    </BorderWrapper>

    <div class="container">
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
          %
        </span>
        <label class="did-floating-label">Top Offset</label>
      </div>
      <div class="did-floating-label-content">
        <input class="did-floating-input" type="text" v-model="state.rightOffset">
        <span class="did-floating-label-right-content">
          %
        </span>
        <label class="did-floating-label">Right Offset</label>
      </div>
      <div class="did-floating-label-content">
        <input class="did-floating-input" type="text" v-model="state.bottomOffset">
        <span class="did-floating-label-right-content">
          %
        </span>
        <label class="did-floating-label">Bottom Offset</label>
      </div>
      <div class="did-floating-label-content">
        <input class="did-floating-input" type="text" v-model="state.leftOffset">
        <span class="did-floating-label-right-content">
          %
        </span>
        <label class="did-floating-label">Left Offset</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
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
