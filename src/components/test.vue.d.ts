import Vue from 'vue';
export default class test extends Vue {
    msg: string;
    PropA: string;
    propB: string;
    propC: string | boolean;
    demo(ss: string): void;
    onChanged(val: string, oldVal: string): void;
    mounted(): void;
    created(): void;
}
