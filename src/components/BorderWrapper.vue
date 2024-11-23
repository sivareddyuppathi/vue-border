<script setup lang="ts">
import { useSlots } from 'vue'
import type { Props, Positions, PositionPercent, valueType } from './tpyes';

const props = withDefaults(defineProps<Props>(), {
  borderWidth: '4px',
  innerPadding: '20px',
  borderRadius: '15px',
  borderColor: '#000000',
  borderType: 'solid',
});
const slots = useSlots()

const defaultPosition = { primary: '50%', secondary: '50%' };

function determineLocations(): Positions {
  const top: boolean = slots.topElement !== undefined;
  const right: boolean = slots.rightElement !== undefined;
  const bottom: boolean = slots.bottomElement !== undefined;
  const left: boolean = slots.leftElement !== undefined;
  return { top, right, bottom, left }
}

const positions = determineLocations();

function parsePercentage(float: number = 0.5): PositionPercent {
  if (float > 1) float = 1;
  else if (float < 0) float = 0;
  return { primary: `${Math.round(float * 100)}%`, secondary: `${Math.round((1 - float) * 100)}%` };
}

const topPosition: PositionPercent = positions.top ? parsePercentage(props.topPosition) : defaultPosition;
const rightPosition: PositionPercent = positions.right ? parsePercentage(props.rightPosition) : defaultPosition;
const bottomPosition: PositionPercent = positions.bottom ? parsePercentage(props.bottomPosition) : defaultPosition;
const leftPosition: PositionPercent = positions.left ? parsePercentage(props.leftPosition) : defaultPosition;

const topOffset: valueType = positions.top ? props.topOffset : undefined;
const rightOffset: valueType = positions.right ? props.rightOffset : undefined;
const bottomOffset: valueType = positions.bottom ? props.bottomOffset : undefined;
const leftOffset: valueType = positions.left ? props.leftOffset : undefined;

</script>

<template>
  <div class="border-container" :style="props.style">
    <!-- Top Border -->
    <div class="border-horizontal-parent">
      <div class="border-wrapper-corner" :style="{
        borderTopLeftRadius: props.borderRadius,
        borderTop: props.borderType,
        borderLeft: props.borderType,
        borderTopWidth: props.borderWidth,
        borderLeftWidth: props.borderWidth,
        borderTopColor: props.borderColor,
        borderLeftColor: props.borderColor,
        marginTop: topOffset,
        marginLeft: leftOffset,
        minHeight: props.borderRadius,
        minWidth: props.borderRadius,
      }" />
      <div :style="{
        borderTop: props.borderType,
        borderTopWidth: props.borderWidth,
        borderTopColor: props.borderColor,
        width: topPosition.primary,
        marginTop: topOffset,
      }" />
      <!-- top element -->
      <slot name="topElement" />
      <div :style="{
        borderTop: props.borderType,
        borderTopWidth: props.borderWidth,
        borderTopColor: props.borderColor,
        width: topPosition.secondary,
        marginTop: topOffset,
      }" />
      <div class="border-wrapper-corner" :style="{
        borderTopRightRadius: props.borderRadius,
        borderTop: props.borderType,
        borderRight: props.borderType,
        borderTopWidth: props.borderWidth,
        borderRightWidth: props.borderWidth,
        borderTopColor: props.borderColor,
        borderRightColor: props.borderColor,
        marginTop: topOffset,
        minHeight: props.borderRadius,
        minWidth: props.borderRadius,
        marginRight: rightOffset,
      }" />
    </div>

    <!-- Children Section -->
    <div class="border-children">
      <!-- Left Border -->
      <div class="border-vertical-parent">
        <div :style="{
          borderLeft: props.borderType,
          borderLeftWidth: props.borderWidth,
          borderLeftColor: props.borderColor,
          height: leftPosition.primary,
          marginLeft: leftOffset,
        }" />
        <slot name="leftElement" />
        <div :style="{
          borderLeft: props.borderType,
          borderLeftWidth: props.borderWidth,
          borderLeftColor: props.borderColor,
          height: leftPosition.secondary,
          marginLeft: leftOffset,
        }" />
      </div>

      <!-- Main Content -->
      <div :style="{ padding: props.innerPadding }">
        <slot />
      </div>

      <!-- Right Border -->
      <div class="border-vertical-parent">
        <div :style="{
          borderRight: borderType,
          borderRightColor: borderColor,
          borderRightWidth: borderWidth,
          height: rightPosition.primary,
          marginRight: rightOffset,
        }" />
        <slot name="rightElement" />
        <div :style="{
          borderRight: borderType,
          borderRightColor: borderColor,
          borderRightWidth: borderWidth,
          height: rightPosition.secondary,
          marginRight: rightOffset,
        }" />
      </div>
    </div>

    <!-- Bottom Border -->
    <div class="border-horizontal-parent">
      <div :style="{
        borderBottomLeftRadius: props.borderRadius,
        borderBottom: props.borderType,
        borderLeft: props.borderType,
        borderBottomWidth: props.borderWidth,
        borderLeftWidth: props.borderWidth,
        borderBottomColor: props.borderColor,
        borderLeftColor: props.borderColor,
        minHeight: props.borderRadius,
        minWidth: props.borderRadius,
        marginBottom: bottomOffset,
        marginLeft: leftOffset,
      }" />
      <div :style="{
        borderBottom: props.borderType,
        borderBottomWidth: props.borderWidth,
        borderBottomColor: props.borderColor,
        width: bottomPosition.primary,
        marginBottom: bottomOffset,
      }" />
      <slot name="bottomElement" />
      <div class="bottom-border" />
      <div class="bottom-right-border" />
    </div>
  </div>
</template>

<style scoped>
.bottom-border {
  border-bottom: v-bind(props.borderType);
  border-bottom-width: v-bind(props.borderWidth);
  border-bottom-color: v-bind(props.borderColor);
  width: v-bind(bottomPosition.secondary);
  margin-bottom: v-bind(bottomOffset);
}

.bottom-right-border {
  border-bottom-right-radius: v-bind(props.borderRadius);
  border-bottom: v-bind(props.borderType);
  border-right: v-bind(props.borderType);
  border-bottom-width: v-bind(props.borderWidth);
  border-right-width: v-bind(props.borderWidth);
  border-bottom-color: v-bind(props.borderColor);
  border-right-color: v-bind(props.borderColor);
  margin-bottom: v-bind(bottomOffset);
  min-height: v-bind(props.borderRadius);
  min-width: v-bind(props.borderRadius);
  margin-right: v-bind(rightOffset);
}


h1 {
  font-size: 42pt;
  margin-top: 0;
  margin-bottom: 0;
}

h2 {
  font-size: 24pt;
}

h3 {
  font-size: 12pt;
}

.border-container {
  display: inline-block;
}

.border-children {
  display: flex;
  flex-direction: row;
}

.border-horizontal-parent {
  display: flex;
  flex-direction: row;
}

.border-vertical-parent {
  display: flex;
  flex-direction: column;
}

.border-wrapper-corner {
  display: flex;
}
</style>
