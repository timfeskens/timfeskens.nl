<template>
	<div class="easteregg">
		<div class="bg part-1">
			<div class="bg--color">
		</div>
		<span class="bg--title">Oh, hi there<span class="blink">|</span></span>
		<i class="material-icons to-bottom" v-scroll-to="'.part-2'">expand_more</i>
		</div>
		<div class="bg part-2">
			<div class="bg--color">
		</div>
		<span class="bg--title">What are you doing here?<span class="blink">|</span></span>
		<i class="material-icons to-bottom" v-scroll-to="'.part-3'">expand_more</i>
		</div>
		<div class="bg part-3">
			<div class="bg--color">
		</div>
		<span class="bg--title">What am I doing here?<span class="blink">|</span></span>
		<i class="material-icons to-bottom" v-scroll-to="'.part-4'">expand_more</i>
		</div>
		<div class="bg part-4">
			<div class="bg--color">
		</div>
		<span class="bg--title">Oh that's right!<span class="blink">|</span></span>
		<i class="material-icons to-bottom" v-scroll-to="'.part-5'">expand_more</i>
		</div>
		<div class="bg part-5">
			<div class="bg--color">
		</div>
		<span class="bg--title title-small">I'm just creeping.<span class="blink">|</span></span>
		<div class="part-5--bottom"></div>
		</div>
		<i class="material-icons to-top--phone" v-scroll-to="'.part-1'">expand_less</i>
	</div>
</template>
<style lang="scss">
@import '~@/main.scss';

body, html {
	height: 100%;
}

.easteregg {
	height: auto;
	font-family: 'Montserrat', sans-serif;
	height: 100%;
	overflow: hidden;
	text-align: center;

	.to-bottom {
		font-size: 4em;
		color: $tim--white;
		z-index: 3;
		cursor: pointer;
		opacity: .4;
		transition-duration: 500ms;

		&:hover, &:focus {
			opacity: 1.0;
			transition-duration: 500ms;
		}

		@media only screen and (max-width: $tablet) {
		   background: $tim--main;
		   border-radius: 46px;
		   padding: 10px 26px;
		   margin-top: 100px;
        }
	}

	.to-top--phone {
		font-size: 3em;
		background: $tim--main;
		color: $tim--white;
		border-radius: 46px;
		width: 50px;
		padding: 10px 26px;
		margin: 25px auto 0;
		cursor: pointer;
		opacity: .3;

		&:hover, &:focus {
			opacity: 1.0;
			transition-duration: 500ms;
		}

		@media only screen and (max-width: $tablet) {
			display: block;
		}
	}

	.bg {
		position: absolute;
		left:0;
		width: 100%;
		overflow: hidden;
		height: 100%;	
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		z-index: 2;

		&--color {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $tim--black;
			opacity: .4;
			z-index: 2;
		}
	}
	
	.bg--title {
		font-size: 6em;
		font-weight: $heavy;
		color: $tim--white;
		z-index: 3;
		font-size: 4em;

		@media only screen and (max-width: $tablet) {
        	text-align: center;
        }
	}

	.bg--me {
		text-decoration: none;
		cursor: auto;

		&:hover, &:visited, &:active {
			color: $tim--white;
		}
	}

	.blink {
  		animation: blink 1300ms infinite;
		height: 1em;
	}

	@keyframes blink {
		0% {opacity: 0}
		49%{opacity: 0}
		50% {opacity: 1}	
	}

	.part-1 {
		top: 0;
		background: linear-gradient(#CCCCCC, #CCCCFF);
	}

	.part-2 {
		top: 100%;
		background: linear-gradient(#CCCCFF, #CCFFFF);
	}

	.part-3 {
		top: 200%;
		background: linear-gradient(#CCFFFF, #CCFFCC);
	}

	.part-4 {
		top: 300%;
		background: linear-gradient(#CCFFFF, #628740);
	}

	.part-5 {
		top: 400%;
		background: linear-gradient(#628740, #a4cb46);

	&--bottom {
		position: absolute;
		bottom: 0;
		background: url("../images/grass.png") no-repeat center;
		z-index: 5;
		background-size: contain;
		width: 100%;
		height: 100px;
	}

	}
}

</style>

<script>
export default {
  name: 'Easteregg'
}
</script>
