<template>
    <div class="checkbox_input_group" @click="onClick()">
        <input
            type="checkbox"
            :checked="modelValue?true:arrayElement?array?.includes(arrayElement):false"
            :value="arrayElement"
            class="checkbox_input"
        />
        <label class="checkbox_label" >{{ label??'Checkbox' }}</label>
    </div>
</template>



<script lang="ts" setup>
const props = defineProps<{
    modelValue?: boolean|string
    label?: string
    arrayElement?: string | number
    array?: Array<string | number>
}>();

// 
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'update:label', value: string | undefined): void;
    // work on reactive array
    (e: 'update:array', value: Array<string | number>): void;
    (e: 'checked'): void;
    (e: 'unchecked'): void
}>();

const onClick = () => {
    emit('update:label', props.label?.split('').reverse().join(''));
    emit('update:modelValue', !props.modelValue)
    if (props.array && props.arrayElement) {
        const neuesArray = [...props.array]
        if (neuesArray.includes(props.arrayElement)) {
            // ist schon drin! Was nun?
            neuesArray.splice(neuesArray.indexOf(props.arrayElement), 1)
            // neuesArray.filter(el=>{
            //     console.log(el!=props.arrayElement)
            //     return el!=props.arrayElement
            // })
            // emit('update:array', neuesArray)
        } else {
            neuesArray.push(props.arrayElement)
            // ist noch nicht drin! Was nun
            // emit('update:array', neuesArray)
        }
        emit('update:array', neuesArray)
    }
}
</script> 

<style scoped>

.checkbox_input_group {
    justify-content: left;
    align-items: center;
}
.checkbox_input_group:hover{
    cursor: pointer;
}
.checkbox_input {
    display: none;
    outline: none;
    margin: 0 0.5rem;
}
.checkbox_input:checked {
    background: var(--base);
    color: var(--bg_main);
}
.checkbox_input:hover {
    cursor: pointer;
    transform: scale(1.1);
}
.checkbox_label {
    height: 100%;
    width: 100%;
    padding-left: 2em;
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    word-break: break-all;
    word-break: break-word;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
}
.checkbox_label::before {
    content: "\2713";
    font-size: 0.8em;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0.5em;
    width: 1rem;
    height: 1rem;
    background: var(--bg_main);
    color: var(--bg_main);
    border-radius: 5px;
    border: 1px solid var(--text_main);
    transition: color 0.5s, background 1s;
}
.checkbox_label:hover{
    cursor: pointer;
}
.checkbox_input:checked ~ .checkbox_label::before {
    color: var(--base);
    border-color: var(--color_main);
}
</style>