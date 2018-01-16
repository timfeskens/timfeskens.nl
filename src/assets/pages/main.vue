<template>
	<div class="home">
		<div class="bg">
			<div class="bg--color">
		</div>
		<span class="bg--title">Hi, I'm Tim<router-link to="/easteregg" class="bg--easteregg">.</router-link><span class="blink">|</span></span>
		<i class="material-icons to-bottom" v-scroll-to="'.container'">expand_more</i>
		</div>
		<i class="material-icons to-top" v-scroll-to="'.bg'">expand_less</i>
		<div class="container">
			<div class="expertise--title"> My Expertise </div>
			<div class="expertise">
				<div class="expertise--b1">
					<h2>Lorum Ipsum</h2>
					Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
				</div>
				<div class="expertise--b2">
					<h2>Lorum Ipsum</h2>
					Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
				</div>
				<div class="expertise--b3">
					<h2>Lorum Ipsum</h2>
					Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
				</div>
			</div>
			<div class="about--title"> My Life </div>
			<div class="about">
				<div class="about__image"></div>
				<div class="about__block">
					<div class="about__block--1">
						Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
					</div>
					<div class="about__block--2">
						Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
					</div>
				</div>
				<i class="material-icons to-top--phone" v-scroll-to="'.bg'">expand_less</i>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import '~@/main.scss';
.home {
	height: auto;
	font-family: 'Montserrat', sans-serif;

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
           font-size: 5em;
		   background: $tim--gray;
		   border-radius: 46px;
		   padding: 10px 26px;
		   margin-top: 100px;
        }
	}

	.to-top {
		position: fixed;
		right: 10px;
		bottom: 10px;
		font-size: 4em;
		color: $tim--black;
		z-index: 1;
		cursor: pointer;
		opacity: .3;
		transition-duration: 500ms;

		&:hover, &:focus {
			opacity: 1.0;
			transition-duration: 500ms;
		}

		&--phone {
			display: none;
			font-size: 3em;
			background: $tim--gray;
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

		@media only screen and (max-width: $tablet) {
           display: none;
		}
	}

	.bg {
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		overflow: hidden;
		height: 100%;
		background-image: url("../images/laptop.jpeg");
		background-size: cover;
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
			background-image: linear-gradient(to bottom right, $tim--lightgray, $tim--black);
			opacity: .6;
			z-index: 2;
		}
	}
	
	.bg--title {
		font-size: 6em;
		font-weight: $heavy;
		text-align: center;
		color: $tim--white;
		z-index: 3;
		overflow: hidden;
		white-space: nowrap;
		animation: typing 4s steps(40, end);

		@media only screen and (max-width: $tablet) {
			text-align: center;
			animation: none;
			overflow: auto;
			white-space: initial;
        }
	}

	.bg--easteregg {
		text-decoration: none;
		color: $tim--white;
		cursor: auto;

		&:hover, &:visited, &:active {
			color: $tim--white;
		}
	}

	.blink {
  		animation: blink 1300ms infinite;
		height: 1em;
	}

	.container {
		position: absolute;
		top: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		text-align: center;
        color: $tim--black;
	}

	.expertise {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		height: auto;
		width: 100%;
        color: $tim--gray;
		padding: 50px 0;
		
		@media only screen and (max-width: $tablet) {
			flex-direction: column;
        }
		
		&--title {
			font-size: 2em;
			font-weight: $heavy;
			width: 100%;
			padding: 50px 0 0;
		}
	
		&--b1, &--b2, &--b3 {
			font-size: 1.1em;
			width: 20%;
			color: $tim--gray;
			text-align: justify;

			@media only screen and (max-width: $tablet) {
				width: 90%;
				margin: 0 auto;
				font-size: 1.3em;
				padding-bottom: 25px;
        	}

			h2 {
				font-size: 1.5rem;
				padding-bottom: 50px;
				text-align: center;

				@media only screen and (max-width: $tablet) {
					padding-bottom: 25px;
        		}
			}
		}
	}

	.about {
		display: flex;
		flex-direction: column;
		height: auto;
        width: 100%;
        background-color: $tim--lightgray;
        padding: 50px 0;
		
		&--title {
			font-size: 2em;
			font-weight: $heavy;
			width: 100%;
			padding: 50px 0 0;
            background-color: $tim--lightgray;
		}

		&__image {
			height: 200px;
			width: 150px;
			margin: 0 auto 50px;
			background: url("../images/tim.png") no-repeat center;
			background-size: contain;
		}

		&__block {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			@media only screen and (max-width: $tablet) {
				flex-direction: column;
        	}

			&--1, &--2 {
				color: $tim--gray;
				font-size: 1.1em;
				text-align: justify;
				width: 400px;

				@media only screen and (max-width: $tablet) {
					width: 90%;
					padding-bottom: 25px;
					margin: 0 auto;
					font-size: 1.1em;
        		}
			}
		}
	}
	/* keyframes for animations */  
	@keyframes blink {
		0% {opacity: 0}
		49%{opacity: 0}
		50% {opacity: 1}	
	}

	@keyframes typing {
		from { width: 0 }
		to { width: 100% }
	}
}

</style>
<script>
// import Vue from 'vue'
//     new Vue({
//     created: function () {
//             window.addEventListener('keyup', this.myMethod)
//     },
//     methods: {
//         myMethod: function () {
//             console.log(this.keyCode);
//         }
//     }
// });


</script>

<!--<script>
// export default {
//   name: 'Tim',

// 	mounted: function() {
// 		console.log('het is werkende');
// 	},
// 	methods: {
// 		scrollDown: function (event) {
// 			alert('Hello')
// 		}
// 	}
// }
// </script>
