import {motion} from 'framer-motion';

export default function LogoAnimation({className}){

	const svgVariants = {
		hidden : {
			opacity : 0
		},
		visible : {
			opacity : 1,
			transition : {
				duration : 1,
				ease : 'easeInOut'
			}
		}
	}

	const pathVariants = {
		hidden : {
			fill : '#fff',
			pathLength : 0
		},
		visible1 : {
			fill : '#087d8a',
			pathLength : 1,
			transition : {
				fill : {
					delay : 1,
					duration : 1,
					ease : 'easeInOut'
				},
				pathLength : {
					delay : 0,
					duration : 2,
					ease : 'easeInOut'
				}
			}
		},
		visible2 : {
			fill : '#077d8a',
			pathLength : [0,1,0],
			transition : {
				fill : {
					delay : 1,
					duration : 1,
					ease : 'easeInOut'
				},
				pathLength : {
					delay : 0,
					duration : 2,
					ease : 'easeInOut'
				}
			}
		}
		
	}

	return (
		
			<motion.svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 	width="100%" viewBox="0 0 621 556" enableBackground="new 0 0 621 556" xmlSpace="preserve"variants={svgVariants} initial='hidden' animate='visible' >
			
			
			<motion.path  stroke="#087d8a" strokeWidth='10' variants={pathVariants} initial='hidden' animate='visible1'
				d="
			M500.115234,177.667450 
				C534.012085,211.627029 567.908936,245.586609 602.548584,280.290344 
				C513.910034,368.928131 425.235535,457.601837 336.329803,546.506775 
				C334.884766,545.192444 333.772522,544.261536 332.750916,543.239990 
				C246.142380,456.640350 159.548248,370.026306 72.902962,283.463440 
				C70.318741,280.881714 69.035599,279.283173 72.388733,275.937897 
				C159.684219,188.847488 246.860886,101.637955 334.060608,14.451530 
				C334.519623,13.992583 335.015137,13.570180 335.564941,13.065199 
				C388.041260,65.542610 440.468201,117.970589 492.769653,170.929352 
				C460.936951,189.462433 429.185516,207.387955 397.576538,225.561249 
				C393.490265,227.910614 389.793732,231.218399 386.565033,234.685913 
				C384.172913,237.254944 383.032654,240.815323 385.704529,244.276260 
				C388.373047,247.732819 391.898712,249.885880 396.093109,248.172729 
				C400.156677,246.513031 403.874115,243.922424 407.580017,241.491318 
				C412.500671,238.263336 417.262726,234.793579 422.557922,231.103683 
				C422.919281,232.659622 423.182770,233.263397 423.182068,233.866882 
				C423.133575,276.009125 423.266571,318.153198 422.878143,360.292450 
				C422.754425,373.716248 417.943878,377.761505 404.412201,378.358643 
				C404.120117,378.371552 403.839508,378.644348 403.330139,378.914246 
				C403.330139,380.048950 403.330139,381.293213 403.330139,382.725769 
				C423.951691,382.725769 444.354706,382.725769 465.131317,382.725769 
				C464.908417,381.034943 464.728394,379.669281 464.543701,378.268311 
				C462.898926,378.268311 461.734894,378.303497 460.573547,378.262726 
				C451.649567,377.949249 447.072144,373.877289 445.952423,365.062988 
				C445.491394,361.434143 445.079926,357.767273 445.074707,354.117065 
				C445.010742,309.308563 445.052063,264.499878 444.966766,219.691452 
				C444.960724,216.518036 445.985291,214.512024 448.631622,212.707733 
				C462.114990,203.514542 475.450195,194.104370 488.886688,184.841873 
				C492.541382,182.322525 496.367676,180.052124 500.115234,177.667450 
			M227.036896,279.500000 
				C227.036942,261.008820 226.967972,242.517242 227.079422,224.026749 
				C227.112473,218.544250 227.433777,213.041687 228.008423,207.588943 
				C229.104080,197.192505 234.754303,192.185394 245.153687,192.012146 
				C246.940567,191.982376 248.728363,192.007965 250.371353,192.007965 
				C251.858398,187.563751 249.154297,187.962097 246.811234,187.962402 
				C225.654404,187.965103 204.497559,187.960541 183.340744,187.980057 
				C182.381775,187.980942 181.423004,188.191711 180.515594,188.298645 
				C179.223572,193.100052 182.651917,191.932602 184.812668,191.976257 
				C196.933701,192.221329 201.752655,196.437683 203.041656,208.431015 
				C203.574203,213.386032 203.904205,218.387192 203.923080,223.368896 
				C204.012619,247.024246 203.732330,270.683258 204.053329,294.334564 
				C204.233795,307.632050 204.688370,320.987549 206.146759,334.192383 
				C208.731995,357.600128 225.400803,375.673737 248.404572,380.036377 
				C256.982727,381.663208 265.966705,382.094910 274.709717,381.730316 
				C300.522217,380.653961 320.622223,364.546173 326.578827,340.358368 
				C328.436707,332.814056 329.725464,324.944519 329.874115,317.196960 
				C330.465240,286.391785 330.495148,255.575943 330.753754,224.764236 
				C330.792877,220.101013 330.768860,215.427368 331.073700,210.778183 
				C331.899811,198.179352 338.268250,192.214249 350.851257,191.993759 
				C351.810974,191.976929 352.768372,191.826584 353.624084,191.747757 
				C355.013092,187.572128 352.349518,187.956085 349.973450,187.957626 
				C333.481110,187.968399 316.988403,187.916321 300.497101,188.046875 
				C299.074615,188.058136 297.661469,189.244766 296.243988,189.885422 
				C297.591797,190.591919 298.919617,191.868317 300.290558,191.916428 
				C313.496277,192.380005 318.743317,196.754364 319.030884,209.935745 
				C319.644684,238.071579 319.804810,266.221985 319.743683,294.365540 
				C319.719147,305.664948 318.934540,316.989258 317.944611,328.253815 
				C316.394897,345.889252 307.243896,358.475769 291.024872,365.478729 
				C267.481812,375.643982 232.349777,371.416260 229.043289,329.866577 
				C227.737808,313.461700 227.668900,296.958466 227.036896,279.500000 
			M361.977386,322.499481 
				C361.751587,329.644897 361.917175,336.830688 361.185944,343.924011 
				C360.503113,350.547363 356.868500,353.431152 350.198425,353.985626 
				C348.706604,354.109680 347.110199,353.822083 345.737518,354.266418 
				C344.635773,354.623108 343.799774,355.800537 342.845825,356.613739 
				C343.080597,356.965881 343.315369,357.318024 343.550140,357.670166 
				C362.269836,357.670166 380.989532,357.670166 399.709229,357.670166 
				C399.945343,357.193146 400.181458,356.716156 400.417572,356.239136 
				C399.282288,355.526428 398.208221,354.329132 397.002197,354.176819 
				C386.355103,352.832031 383.682953,350.301544 383.576569,339.526703 
				C383.305389,312.055695 383.298462,284.582092 383.187286,257.109528 
				C383.180542,255.443176 383.186401,253.776749 383.186401,251.652252 
				C376.741730,255.516083 371.124451,259.085388 365.306335,262.290009 
				C362.234497,263.981995 361.358063,266.177612 361.418549,269.558685 
				C361.728363,286.870148 361.813629,304.185669 361.977386,322.499481 
			M375.846680,220.813354 
				C372.306610,213.890701 368.857574,206.917999 365.113647,200.107422 
				C364.634338,199.235474 362.053619,198.445358 361.414978,198.920166 
				C358.650818,200.975113 356.222443,203.489014 353.718842,205.884933 
				C351.707214,207.810028 351.690033,209.609268 353.573303,211.896469 
				C358.308319,217.647232 362.666321,223.709122 367.423035,229.440872 
				C368.845520,231.154938 371.085388,232.190659 372.950775,233.537155 
				C374.274567,230.992722 375.856140,228.539688 376.805389,225.862442 
				C377.232788,224.657059 376.398193,223.004211 375.846680,220.813354 
			z"/>
			<motion.path stroke='#077d8a' strokeWidth='10' variants={pathVariants} initial='hidden' animate='visible2'
				d="
			M295.754883,37.744781 
				C214.930222,118.572685 134.354767,199.149643 54.375980,279.129883 
				C137.023727,361.770416 219.354218,444.093719 301.620483,526.352783 
				C294.533234,533.332275 288.397858,539.374390 282.421783,545.259644 
				C194.056671,456.894043 105.347099,368.183960 16.933485,279.769867 
				C105.439133,191.264343 194.226715,102.476898 282.535919,14.167814 
				C288.295288,19.780861 294.588013,25.913715 301.793579,32.936245 
				C299.892395,34.432907 297.948242,35.963364 295.754883,37.744781 
			z"/>
			<path fill="#fff" opacity="1.000000" stroke="none" 
				d="
			M500.283569,177.400330 
				C496.367676,180.052124 492.541382,182.322525 488.886688,184.841873 
				C475.450195,194.104370 462.114990,203.514542 448.631622,212.707733 
				C445.985291,214.512024 444.960724,216.518036 444.966766,219.691452 
				C445.052063,264.499878 445.010742,309.308563 445.074707,354.117065 
				C445.079926,357.767273 445.491394,361.434143 445.952423,365.062988 
				C447.072144,373.877289 451.649567,377.949249 460.573547,378.262726 
				C461.734894,378.303497 462.898926,378.268311 464.543701,378.268311 
				C464.728394,379.669281 464.908417,381.034943 465.131317,382.725769 
				C444.354706,382.725769 423.951691,382.725769 403.330139,382.725769 
				C403.330139,381.293213 403.330139,380.048950 403.330139,378.914246 
				C403.839508,378.644348 404.120117,378.371552 404.412201,378.358643 
				C417.943878,377.761505 422.754425,373.716248 422.878143,360.292450 
				C423.266571,318.153198 423.133575,276.009125 423.182068,233.866882 
				C423.182770,233.263397 422.919281,232.659622 422.557922,231.103683 
				C417.262726,234.793579 412.500671,238.263336 407.580017,241.491318 
				C403.874115,243.922424 400.156677,246.513031 396.093109,248.172729 
				C391.898712,249.885880 388.373047,247.732819 385.704529,244.276260 
				C383.032654,240.815323 384.172913,237.254944 386.565033,234.685913 
				C389.793732,231.218399 393.490265,227.910614 397.576538,225.561249 
				C429.185516,207.387955 460.936951,189.462433 492.920837,171.237534 
				C507.875732,162.838348 522.554077,154.661774 537.669495,146.241714 
				C536.604309,153.704422 530.260498,155.580032 525.794983,158.980621 
				C517.531494,165.273407 508.919006,171.107849 500.283569,177.400330 
			z"/>
			<path fill="#fff" opacity="1.000000" stroke="none" 
				d="
			M227.036896,280.000000 
				C227.668900,296.958466 227.737808,313.461700 229.043289,329.866577 
				C232.349777,371.416260 267.481812,375.643982 291.024872,365.478729 
				C307.243896,358.475769 316.394897,345.889252 317.944611,328.253815 
				C318.934540,316.989258 319.719147,305.664948 319.743683,294.365540 
				C319.804810,266.221985 319.644684,238.071579 319.030884,209.935745 
				C318.743317,196.754364 313.496277,192.380005 300.290558,191.916428 
				C298.919617,191.868317 297.591797,190.591919 296.243988,189.885437 
				C297.661469,189.244766 299.074615,188.058136 300.497101,188.046875 
				C316.988403,187.916321 333.481110,187.968399 349.973450,187.957626 
				C352.349518,187.956085 355.013092,187.572128 353.624084,191.747757 
				C352.768372,191.826584 351.810974,191.976929 350.851257,191.993759 
				C338.268250,192.214249 331.899811,198.179352 331.073700,210.778183 
				C330.768860,215.427368 330.792877,220.101013 330.753754,224.764236 
				C330.495148,255.575943 330.465240,286.391785 329.874115,317.196960 
				C329.725464,324.944519 328.436707,332.814056 326.578827,340.358368 
				C320.622223,364.546173 300.522217,380.653961 274.709717,381.730316 
				C265.966705,382.094910 256.982727,381.663208 248.404572,380.036377 
				C225.400803,375.673737 208.731995,357.600128 206.146759,334.192383 
				C204.688370,320.987549 204.233795,307.632050 204.053329,294.334564 
				C203.732330,270.683258 204.012619,247.024246 203.923080,223.368896 
				C203.904205,218.387192 203.574203,213.386032 203.041656,208.431015 
				C201.752655,196.437683 196.933701,192.221329 184.812668,191.976257 
				C182.651917,191.932602 179.223572,193.100052 180.515594,188.298645 
				C181.423004,188.191711 182.381775,187.980942 183.340744,187.980057 
				C204.497559,187.960541 225.654404,187.965103 246.811234,187.962402 
				C249.154297,187.962097 251.858398,187.563751 250.371353,192.007965 
				C248.728363,192.007965 246.940567,191.982376 245.153687,192.012146 
				C234.754303,192.185394 229.104080,197.192505 228.008423,207.588943 
				C227.433777,213.041687 227.112473,218.544250 227.079422,224.026749 
				C226.967972,242.517242 227.036942,261.008820 227.036896,280.000000 
			z"/>
			<path fill="#fff" opacity="1.000000" stroke="none" 
				d="
			M361.977356,321.999634 
				C361.813629,304.185669 361.728363,286.870148 361.418549,269.558685 
				C361.358063,266.177612 362.234497,263.981995 365.306335,262.290009 
				C371.124451,259.085388 376.741730,255.516083 383.186401,251.652252 
				C383.186401,253.776749 383.180542,255.443176 383.187286,257.109528 
				C383.298462,284.582092 383.305389,312.055695 383.576569,339.526703 
				C383.682953,350.301544 386.355103,352.832031 397.002197,354.176819 
				C398.208221,354.329132 399.282288,355.526428 400.417572,356.239136 
				C400.181458,356.716156 399.945343,357.193146 399.709229,357.670166 
				C380.989532,357.670166 362.269836,357.670166 343.550140,357.670166 
				C343.315369,357.318024 343.080597,356.965881 342.845825,356.613739 
				C343.799774,355.800537 344.635773,354.623108 345.737518,354.266418 
				C347.110199,353.822083 348.706604,354.109680 350.198425,353.985626 
				C356.868500,353.431152 360.503113,350.547363 361.185944,343.924011 
				C361.917175,336.830688 361.751587,329.644897 361.977356,321.999634 
			z"/>
			<path fill="#fff" opacity="1.000000" stroke="none" 
				d="
			M375.991455,221.183868 
				C376.398193,223.004211 377.232788,224.657059 376.805389,225.862442 
				C375.856140,228.539688 374.274567,230.992722 372.950775,233.537155 
				C371.085388,232.190659 368.845520,231.154938 367.423035,229.440872 
				C362.666321,223.709122 358.308319,217.647232 353.573303,211.896469 
				C351.690033,209.609268 351.707214,207.810028 353.718842,205.884933 
				C356.222443,203.489014 358.650818,200.975113 361.414978,198.920166 
				C362.053619,198.445358 364.634338,199.235474 365.113647,200.107422 
				C368.857574,206.917999 372.306610,213.890701 375.991455,221.183868 
			z"/>
		</motion.svg>
		
	)
}

