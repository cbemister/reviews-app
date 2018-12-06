  
<template>

  <div class="social-buttons col-xs-12 col-sm-4">
        <a v-if="review.siteName === 'google'" target="_blank" :href="'https://search.google.com/local/reviews?&placeid=' + google.placeId " title="Review us on Google">
            <img v-if="review.siteName === 'google'" class="col-xs-4 valign" :src="google.iconImgSrc">
            <p v-if="review.siteName === 'google'" class="col-xs-8 valign">Read Our Google Reviews</p>

        </a>

        <a v-else-if="review.siteName === 'facebook'" target="_blank" :href="'https://www.facebook.com' + review.facebook.reviewPath " title="Review us on Facebook">
            <img v-else-if="review.siteName === 'facebook'" class="col-xs-4 valign" :src="review.facebook.iconImgSrc">
            <p v-if="review.siteName === 'facebook'" class="col-xs-8 valign">Read Our Facebook Reviews</p>

        </a>

        <a v-else-if="review.siteName === 'dealerrater'" target="_blank" href="https://www.dealerrater.ca/dealer/{{ review.dealerrater.reviewPath }}" title="Review us on DealerRater">
            <img v-else-if="review.siteName === 'dealerrater'" class="col-xs-4 valign" src="{{review.dealerrater.iconImgSrc}}">
            <p v-if="review.siteName === 'dealerrater'" class="col-xs-8 valign">Read Our DealerRater Reviews</p>
            </a>
            
            <div class="stars">
                <span> {{ review.rating }} </span>
                <i v-for="n in review.rating" class="fa fa-star"></i>
                
            </div>



        <div class="text-review">"{{ review.reviewBody }}" <span>- {{ review.author }}</span>
        </div>
        <a v-if="review.siteName === 'google'" class="btn ddc-btn btn-primary ddc-btn-primary" href="https://search.google.com/local/writereview?placeid={{ review.placeId }}">
        <a v-else-if="review.siteName === 'facebook'" class="btn ddc-btn btn-primary ddc-btn-primary" href="https://www.facebook.com/{{ review.facebook.reviewPath }}/reviews/">
        <a v-else-if="review.siteName === 'dealerrater'" class="btn ddc-btn btn-primary ddc-btn-primary" href="https://www.dealerrater.ca/consumer/writereviews/{{ review.dealerrater.reviewId }}">
            <i class="fa fa-pencil-square-o">
        </i>Leave a review</a>
	</div>

</template>

