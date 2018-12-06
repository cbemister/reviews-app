</script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js"></script>

<script>

new Vue({
  el: '#app',
  data () {
    return {
      reviews: null,
      filteredReviews: []
    }
  },
  methods: {
  	sortReviews() {

      var self = this;    

  		this.filteredReviews = this.reviews.filter(function (review) {
			
			let reviewBodyLength = review.reviewBody.length;

			// Change date format
			review.publishDate = formatDate(review.publishDate); 
			
			// Change ratings to float
			review.rating = parseFloat(review.rating);
			
			// Add ID to each review
			review.id = self.filteredReviews.length++;
			
  			return ((review.siteName === 'google' || 'facebook' || 'dealerrater') && reviewBodyLength > 100 && review.rating >= 4)
  		})
  	}
  },
  mounted () {
	  var self = this;
	$.ajax({

		url: "//podium.co/api/v2/locations/16348/reviews?page[size]=50",
		 dataFilter: function(data) {

			var data = JSON.parse(data);

			var filteredResponse = data.reviews.filter(function (review) {

				delete review.authorId;
				delete review.createdAt;
				delete review.locationId;
				delete review.reviewInvitationId;
				delete review.reviewUrl;
				delete review.siteReviewId;
				delete review.updatedAt;

				let reviewRating = parseInt(review.rating);

					if (reviewRating >= 4) {

						return true

					} else {
						return false
					}

				//return review.rating === '3.0'
				//return review.siteName === 'dealerrater'

			 });

			return JSON.stringify(filteredResponse);
		  },
		type: 'GET',

		// Fetch the stored token from localStorage and set in the header

		headers: {
			"Authorization": 'e0973d5da30444e4273525df0f411004'
		},

		error: function (err) {

			console.log('Error!', err);

		},

		success: function (data) {

			self.reviews = data;
			self.sortReviews();
	  		console.log('Success!');
	  		console.log(data);

		}

	});

  }
})

</script>

<script>