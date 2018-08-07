var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      people: 
      [
        { name: "Bob Denver", bio: "bio1", bioVisible: true },
        { name: "Neil Degrasse", bio: "bio2", bioVisible: true },
        { name: "Steve O", bio: "bio3", bioVisible: true }
      ],
      newPerson: { name: "", bio: "", bioVisible: true }
    };
  },

  created: function() {},

  methods: {
    toggleBio: function(inputPerson) {
      console.log("Toggling Bio");
      if (inputPerson.bioVisible === true) {
        inputPerson.bioVisible = false;
        console.log("bio visible: " + inputPerson.bioVisible);
      } else {
        inputPerson.bioVisible = true;
        console.log("bio visible: " + inputPerson.bioVisible);
      }
    },

    addPerson: function() {
      console.log("Adding a person");
      this.people.push(this.newPerson);
      this.newPerson = { name: "", bio: "", bioVisible: true };
    },
    
    numPeople: function() {
      var numOfPeople = this.people.length;
      return numOfPeople;
    },

    deletePerson: function(inputPerson) {
      console.log("deleting person...");
      // console.log(inputPerson);
      var index = this.people.indexOf(inputPerson);
      this.people.splice(index, 1);
    }
  },

  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});

// var tasks = axios.get('/api/tasks').then(function(response.data) { 

// });

