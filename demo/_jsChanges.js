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
                reviewId: '31542', //UPDATE
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
            reviewSummary: [{
                "siteName": "dealerrater",
                "averageRating": 4.59,
                "reviewCount": 1881
            }, {
                "siteName": "facebook",
                "averageRating": 3.74,
                "reviewCount": 297
            }, {
                "siteName": "google",
                "averageRating": 4.11,
                "reviewCount": 744
            }],
            filteredSummary: [],
            reviews: [],
            filteredReviews: [],
            googleReviews: [],
            facebookReviews: [],
            dealerRaterReviews: [],
            combinedReviews: [
                [{
                    "id": 23877076,
                    "siteName": "google",
                    "reviewBody": "Just got my second vehicle with this guys, and its wonderful. Stuff was very helpful, Highly professionals.",
                    "rating": 5,
                    "publishDate": "2018-12-04T22:32:06.873-07:00",
                    "author": "justine mendoza"
                }, {
                    "id": 23876897,
                    "siteName": "google",
                    "reviewBody": "Their customer service is a 5 stars no question about it and they try their best to give you what you need and deserve.",
                    "rating": 5,
                    "publishDate": "2018-12-04T21:55:33.779-07:00",
                    "author": "Abigail Morales"
                }, {
                    "id": 23833523,
                    "siteName": "google",
                    "reviewBody": "Highly recommended, got my 4th brand new vehicle, thank you very much jecris & chester for making it possible...",
                    "rating": 5,
                    "publishDate": "2018-12-03T18:25:51.094-07:00",
                    "author": "Rommel Villanueva"
                }, {
                    "id": 23709733,
                    "siteName": "google",
                    "reviewBody": "Sales staff and vehicle were great. My only disappointment is being promised Air Miles...and not receiving them for the vehicle purchase",
                    "rating": 4,
                    "publishDate": "2018-11-30T04:54:58.936-07:00",
                    "author": "K C"
                }, {
                    "id": 23393357,
                    "siteName": "google",
                    "reviewBody": "Ask for Mo Hamdan!! He was the best! Not your typical salesman, such a great experience from start to finish!!! It felt like we were dealing with a friend! Tell him Courtney sent you!! ;)",
                    "rating": 5,
                    "publishDate": "2018-11-19T21:10:48.507-07:00",
                    "author": "Courtney H"
                }],
                [{
                    "id": 23540146,
                    "siteName": "facebook",
                    "reviewBody": "Thanks to Ismael!! He had great customer service when we were looking to upgrade my vehicle. He was very patient in us knowing what we wanted and made it happen for us begin able to get it! And did everything mostly over text!",
                    "rating": 5,
                    "publishDate": "2018-11-25T07:50:08.000-07:00",
                    "author": "Arlene Donkin"
                }, {
                    "id": 23014143,
                    "siteName": "facebook",
                    "reviewBody": "We had a very positive experience with Crosstown and will reccommend this dealership and especially our salesman Ali.  Ali was very easy to work with, he was patient and not pushy, even when he knew he might not make a sale.  He explained how the lit...",
                    "rating": 5,
                    "publishDate": "12. November 2018",
                    "author": "Donna Blais-Clements"
                }, {
                    "id": 22473400,
                    "siteName": "facebook",
                    "reviewBody": "We came to Crosstown last weekend and we are amazed on a good service provided by Jecris Bautista. He fully understands our situation as a first time buyer and we would like to thank him.\n\nGlenn and Michelle Ballesteros",
                    "rating": 5,
                    "publishDate": "2018-10-26T16:59:39.000-06:00",
                    "author": "Ladymichelle Ballesteros"
                }, {
                    "id": 22204654,
                    "siteName": "facebook",
                    "reviewBody": "this is my 2nd truck purchase from crosstown.once again husney the sales manager and moh the salesman made me feel like family they cut through the fat and got me a great deal in a timely manner.i know it's there job to sell vehicle but they make it ...",
                    "rating": 5,
                    "publishDate": "17. October 2018",
                    "author": "Mark Graham"
                }, {
                    "id": 22077888,
                    "siteName": "facebook",
                    "reviewBody": "Had the best sales experience today with Gerald. Very professional, knowledgable and friendly. Would only buy my truck through him!",
                    "rating": 5,
                    "publishDate": "2018-10-13T15:37:45.000-06:00",
                    "author": "Yosef VasiliSki"
                }],
                [{
                    "id": 23933003,
                    "siteName": "dealerrater",
                    "reviewBody": "From start till now, Mr. Angeles never have fadeless to his excellent service to the valued customer like me and offer additional inspection with no cost for the customer satisfaction and recommendations. Fast & Reliable. Great Staff!\r\n",
                    "rating": 5,
                    "publishDate": "2018-12-05T05:00:00.000-07:00",
                    "author": "Ferdz Abrera"
                }, {
                    "id": 23786807,
                    "siteName": "dealerrater",
                    "reviewBody": "An absolutely fantastic experience with Al Dewan and his team.  We live three hours from Edmonton so we texted pictures of our trade to Al and made a deal over the phone on a Jeep Grand Cherokee Summit demo unit.\r\n\r\nDrove up to Edmonton and the unit ...",
                    "rating": 5,
                    "publishDate": "1. December 2018",
                    "author": "Jeep happy people"
                }, {
                    "id": 23714081,
                    "siteName": "dealerrater",
                    "reviewBody": "Very happy with the sales man and vehicle. Only disappointment was being promised Air Miles...and not receiving them for the Vehicle purchase. It's been over two weeks.",
                    "rating": 4,
                    "publishDate": "2018-11-30T05:00:00.000-07:00",
                    "author": "KC"
                }, {
                    "id": 23392804,
                    "siteName": "dealerrater",
                    "reviewBody": "Wasn't planning on buying vehicle but Jeff nose worthy was such awesome sale person. Very sincere and I found him very honest! Oh and also got great deal. Thanks Jeff!  Hope your still there for our next jeep in about 3 to 4 years!! Strongly recommen...",
                    "rating": 4.8,
                    "publishDate": "19. November 2018",
                    "author": "Summitjeep123"
                }, {
                    "id": 22565827,
                    "siteName": "dealerrater",
                    "reviewBody": "Mauricio worked hard to get us the car, and deal we wanted and a great trade in price on my truck. Would definetly reccomend crosstown when buying a vehicle. Great friendly service all around and the most laid back atmosphere out of any dealership iv...",
                    "rating": 5,
                    "publishDate": "30. October 2018",
                    "author": "Scottyp63"
                }]
            ],
            orderedReviews: [],
            reviewStart: 0,
			reviewEnd: 2
            
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
                    let reviewTrimmed = review.reviewBody.substr(0, 250) + '...';
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

            var indexOne, i = 0;

            while (i < 5) {

                for (indexOne = 0; indexOne < self.combinedReviews.length; indexOne++) {
                    var selectedItem = self.combinedReviews[indexOne].splice(0, 1);
                    self.orderedReviews.push(selectedItem[0]);
                }

                i++;
            }
            // ONLY REQUIRED FOR DEV - MOVED FROM AJAX SUCCESS

			function calculateStars(siteName) {
                self.filteredSummary[siteName].stars = Math.floor(self.filteredSummary[siteName].averageRating);
                var reviewRating = self.filteredSummary[siteName].averageRating + ''
                var partialRating = reviewRating.charAt(3) !== '0' ? true : false;
                self.filteredSummary[siteName].partialRating = partialRating;
            }

                //self.reviewSummary = data.siteSummary;
                self.reviewSummary.map(summary => {
					self.filteredSummary[summary.siteName] = summary;
					
					calculateStars(self.filteredSummary[summary.siteName].siteName)

                });

        },
        setReviewsToDisplay() {

			// Get saved data from sessionStorage
			var reviewsSet = sessionStorage.getItem('reviewsSet');

			if (!reviewsSet) {
				// Save data to sessionStorage
				sessionStorage.setItem('reviewsSet', '0');
				console.log('store reviews set');

			} else {

				var reviewsSet = parseInt(sessionStorage.getItem('reviewsSet'));
				
				reviewsSet++;
				var displayedReviews = reviewsSet * 3;

				if ( (displayedReviews + 3 ) <= this.orderedReviews.length ) {
					this.reviewStart = this.reviewStart + displayedReviews; 
					this.reviewEnd = this.reviewEnd + displayedReviews; 
					
					reviewsSet.toString();
					sessionStorage.setItem('reviewsSet', reviewsSet); 

				} else {
					this.reviewStart = 0; 
                    this.reviewEnd = 2; 
                    
					sessionStorage.setItem('reviewsSet', '0'); 
				}

			}



		}
    },
    created() {
        var self = this;
        this.sortReviews();
        this.setReviewsToDisplay();

        // $.ajax({
        //     url: "//podium.co/api/v2/locations/16348/reviews?page[size]=200",
        //     crossDomain:true,
        //     dataFilter: function (data) {
        //         var data = JSON.parse(data);
        //         let facebookReview = 0;
        //         let googleReview = 0;
        //         let dealerRaterReview = 0;
        //         var filteredResponse = data.reviews.filter(function (review) {
        //             delete review.authorId;
        //             delete review.createdAt;
        //             delete review.locationId;
        //             delete review.reviewInvitationId;
        //             delete review.reviewUrl;
        //             delete review.siteReviewId;
        //             delete review.updatedAt;
        //             let reviewBodyLength = review.reviewBody.length;
        //             let reviewRating = parseInt(review.rating);
        //             if (review.siteName === 'dealerrater' && reviewRating >= 4 && dealerRaterReview < 5 && reviewBodyLength > 100) {
        //                 dealerRaterReview++;
        //                 return true
        //             } else if (review.siteName === 'facebook' && reviewRating >= 4 && facebookReview < 5 && reviewBodyLength > 100) {
        //                 facebookReview++;
        //                 return true
        //             } else if (review.siteName === 'google' && reviewRating >= 4 && googleReview < 5 && reviewBodyLength > 100) {
        //                 googleReview++;
        //                 return true
        //             } else {
        //                 return false
        //             }
        //             //return review.rating === '3.0'
        //             //return review.siteName === 'dealerrater'
        //         });
        //         return JSON.stringify(filteredResponse);
        //     },
        //     type: 'GET',
        //     // Fetch the stored token from localStorage and set in the header
        //     headers: {
        //         "Authorization": 'e0973d5da30444e4273525df0f411004'
        //     },
        //     error: function (err) {
        //         console.log('Error!', err);
        //     },
        //     success: function (data) {
        //         //self.reviews = data;
        //         //self.filterReviews();
        //         //self.sortReviews();
        //         // console.log('Success!');
        //         // console.log(data);
        //     }
        // });
        // $.ajax({
        //     url: "//podium.co/api/v2/locations/" + self.podiumId + "/sites/summary",
        //     type: 'GET',
        //     // Fetch the stored token from localStorage and set in the header
        //     headers: {
        //         "Authorization": 'e0973d5da30444e4273525df0f411004'
        //     },
        //     error: function (err) {
        //         console.log('Error!', err);
        //     },
        //     success: function (data) {
        //         //self.reviewSummary = data.siteSummary;
        //         // data.siteSummary.map(summary => {
        //         //     self.reviewSummary[summary.siteName] = summary;
        //         //     //var avgRating = summary.averageRating;
        //         //     //var avgRound = Math.round(avgRating)
        //         //     //var partialRating = avgRating.substr(3) !== 0 ? true : false; 
        //         //     //self.reviewSummary[summary.siteName].partialRating = partialRating;
        //         // })
        //         // console.log(data.siteSummary);
        //         // console.log(self.reviewSummary);
        //     }
        // });
    }
})
