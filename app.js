// loop and display cards   -done
// generate randome sort cards    -done
// currently a computed property is doing this task   -done
// return a new array with cards sort randomly    -done

// pick quantity of players



const cards = [{
    thumbnail: '',
    back: 'Drink One',
    flipped: false,
  },
  {
    thumbnail: '',
    back: 'Drink Two',
    flipped: false,

  },
  {
    thumbnail: '',
    back: 'Person on your right Drinks 1 ',
    flipped: false,
  },
  {
    thumbnail: '',
    back: 'Chill out, you pass ',
    flipped: false,
  }
];

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    error: false,
    newFront: '',

  },
  methods: {
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    },
    playAgain: function() {
      let sortArray = this.cards = this.cards.sort();
      for (let i = 0; i <= this.cards.length; i++) {
        this.cards[i].flipped = false;
      }

      return sortArray;
    }


    /*  create new challenges
      addNew: function() {
          if (this.newFront != '' && this.newBack != '') {
            this.cards.push({
              front: this.newFront,
              back: this.newBack,
              flipped: false
            });
            this.newFront = '';
            this.newBack = '';
            this.error = false;

          } else {
            this.error = true;
          }
        },
        */



  },
  computed: {
    randomCards: function() {
      function func(a, b) {
        return 0.5 - Math.random();
      }
      return this.cards.sort(func);
    },

  }
});
