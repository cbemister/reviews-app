</script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js"></script>

<script>
	
Vue.component('review', {
  props: ['review', 'summary'],
  template: `
  <div class="social-buttons col-xs-12 col-sm-4">
        <a v-if="review.siteName === 'google'" target="_blank" :href="'https://search.google.com/local/reviews?&placeid=' + google.placeId " title="Review us on Google">
            <img class="col-xs-4 valign" :src="google.iconImgSrc">
            <p class="col-xs-8 valign">Read Our Google Reviews</p>
        </a>

        <a v-else-if="review.siteName === 'facebook'" target="_blank" :href="'https://www.facebook.com/' + facebook.reviewPath " title="Review us on Facebook">
            <img class="col-xs-4 valign" :src="facebook.iconImgSrc">
            <p class="col-xs-8 valign">Read Our Facebook Reviews</p>

        </a>

        <a v-else-if="review.siteName === 'dealerrater'" target="_blank" :href="'https://www.dealerrater.ca/dealer/' + dealerrater.reviewPath " title="Review us on DealerRater">
            <img class="col-xs-4 valign" :src="dealerrater.iconImgSrc">
            <p class="col-xs-8 valign">Read Our DealerRater Reviews</p>
            </a>
            
            <div class="stars">
                <span> {{ summary[review.siteName].averageRating }} </span>
				<i v-for="star in summary[review.siteName].stars" class="fa fa-star"></i>
				<i v-if="summary[review.siteName].partialRating" class="fa fa-star-half-o"></i>
                
            </div>

        <div class="text-review">"{{ review.reviewBody }}" <span>- {{ review.author }}</span>
        </div>
        <a v-if="review.siteName === 'google'" class="btn ddc-btn btn-primary ddc-btn-primary" :href="'https://search.google.com/local/writereview?placeid=' + google.placeId">
		    <i class="fa fa-pencil-square-o">
        </i>Leave a review</a>
        <a v-else-if="review.siteName === 'facebook'" class="btn ddc-btn btn-primary ddc-btn-primary" :href="'https://www.facebook.com/' + facebook.reviewPath + '/reviews/'">
		    <i class="fa fa-pencil-square-o">
        </i>Leave a review</a>
        <a v-else-if="review.siteName === 'dealerrater'" class="btn ddc-btn btn-primary ddc-btn-primary" :href="'https://www.dealerrater.ca/consumer/writereviews/' + dealerrater.reviewId ">
            <i class="fa fa-pencil-square-o">
        </i>Leave a review</a>
	</div>`,
	data() {
		return {
			google: {
				placeId: 'ChIJveOUX3tfcVMRxWYL623-m6Y', //UPDATE
				iconImgSrc: '//pictures.dealer.com/a/autocanadatc/0776/91bcc858f2caf2c525dcaf96b420cb8ex.jpg', 
				siteName: 'Google',
				averageRating: null

			},
			facebook: {
				reviewPath: 'pg/airdriedodge', //UPDATE
				iconImgSrc: '//pictures.dealer.com/a/autocanadatc/0323/78fab4fc1f64d9a52b1b7c414aa125ebx.jpg',
				siteName: 'Facebook',
				averageRating: null
			},
			dealerrater: {
                reviewPath: 'Crosstown-Chrysler-Jeep-Dodge-dealer-reviews-31542/#link', //UPDATE
                reviewId: '31542',//UPDATE
				iconImgSrc: '//pictures.dealer.com/a/autocanadatc/0687/910a92deeeac21f7e44186f9df2b2babx.jpg',
				siteName: 'DealerRater',
				averageRating: null
			}
		}
	}
})

new Vue({
	el: '#reviewWrapper',
	data() {
		return {
			podiumId: '16348', //UPDATE
			reviewSummary: [],
			filteredSummary: [],
			reviews: [],
			filteredReviews: [],
			totalReviews: 0,
			googleReviews: [],
			facebookReviews: [],
			dealerRaterReviews: [],
			combinedReviews: [],
			orderedReviews: []
		}
	},
	methods: {
        filterReviews() {

        var self = this;    

            this.filteredReviews = this.reviews.filter(function (review) {
                
                let reviewBodyLength = review.reviewBody.length;

                // Change ratings to float
                review.rating = parseFloat(review.rating);

				// Trim long reviews
				if (reviewBodyLength > 250 && review.rating >= 4) {
					let reviewTrimmed = review.reviewBody.substr(0, 250 ) + '...';
					review.reviewBody = reviewTrimmed;
					// Change date format
					review.publishDate = formatDate(review.publishDate); 
				}
                
                // Add ID to each review
                //review.id = self.filteredReviews.length++;
                
                return ((review.siteName === 'google' || 'facebook' || 'dealerrater') && review.rating >= 4)
            })
        },
        sortReviews() {
        
        var self = this;    

            this.filteredReviews.map(function (review) {
                
                if (review.siteName === 'google') {
                    self.googleReviews.push(review);
                } else if (review.siteName === 'facebook') {
                    self.facebookReviews.push(review);
                } else if (review.siteName === 'dealerrater') {
                    self.dealerRaterReviews.push(review);
                }

             });

			self.combinedReviews.push(self.googleReviews);
			self.combinedReviews.push(self.facebookReviews);
			self.combinedReviews.push(self.dealerRaterReviews);

            var indexOne, i = 0;

            while (i < 5) {

                for (indexOne = 0; indexOne < self.combinedReviews.length; indexOne++) {
                         var selectedItem = self.combinedReviews[indexOne].splice(0, 1);
                         self.orderedReviews.push(selectedItem[0]);
                 }

                i++;
              }
        }
	},
	created() {
		  var self = this;
	$.ajax({

		url: "//podium.co/api/v2/locations/16348/reviews?page[size]=200",
		 dataFilter: function(data) {

			var data = JSON.parse(data);

			let facebookReview = 0;
			let googleReview = 0;
			let dealerRaterReview = 0;

			var filteredResponse = data.reviews.filter(function (review) {

				delete review.authorId;
				delete review.createdAt;
				delete review.locationId;
				delete review.reviewInvitationId;
				delete review.reviewUrl;
				delete review.siteReviewId;
				delete review.updatedAt;

				let reviewBodyLength = review.reviewBody.length;

                let reviewRating = parseInt(review.rating);

					if (review.siteName === 'dealerrater' && reviewRating >= 4 && dealerRaterReview < 5 && reviewBodyLength > 100 ) {

						dealerRaterReview++;

						return true

						} else if (review.siteName === 'facebook' && reviewRating >= 4 && facebookReview < 5 && reviewBodyLength > 100) {

							facebookReview++;

							return true

					} else if (review.siteName === 'google' && reviewRating >= 4 && googleReview < 5 && reviewBodyLength > 100) {

							   googleReview++;

								return true

							   } else {

								   return false
							   }

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
			self.filterReviews();
			self.sortReviews();

		}
	});

	$.ajax({

		url: "//podium.co/api/v2/locations/" + self.podiumId + "/sites/summary",
		type: 'GET',

		// Fetch the stored token from localStorage and set in the header

		headers: {
			"Authorization": 'e0973d5da30444e4273525df0f411004'
		},

		error: function (err) {

			console.log('Error!', err);

		},

		success: function (data) {

			function calculateStars(siteName) {
                self.filteredSummary[siteName].stars = Math.floor(self.filteredSummary[siteName].averageRating);
                var reviewRating = self.filteredSummary[siteName].averageRating + ''
                var partialRating = reviewRating.charAt(3) !== '0' ? true : false;
                self.filteredSummary[siteName].partialRating = partialRating;
            }

                self.reviewSummary = data.siteSummary;
                data.siteSummary.map(summary => {
					self.filteredSummary[summary.siteName] = summary;
					
					calculateStars(self.filteredSummary[summary.siteName].siteName)

                });

		}

	});

  }
})
</script>

<script>

