const app = Vue.createApp({
  data() {
    return {
       enterdGoal: '',
       goals: [] 
      };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enterdGoal);

    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
