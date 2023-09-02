---
layout: page
title: GP emulation for chemotaxis
description: 
img: /assets/img/XYOverTime.png
---

<script type="text/javascript">
 function showhide(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
 }
</script>
   
With Diana Giurghita and [Dirk Husmeier](https://www.gla.ac.uk/schools/mathematicsstatistics/staff/dirkhusmeier/)

> Gaussian process emulation for parameter inference in a stochastic differential equation system describing the behaviour of cells migrating as a response to chemotaxis.

<i class="fa fa-sticky-note" aria-hidden="true"></i> <a href="javascript:showhide('pcp')">_Abstract_</a>
<div id="pcp" style="display:none;">
<p>  <div style="font-size:0.85em; text-align: justify;"> An emulation-based method for inference of 10 parameters of the stochastic differential equation (SDE) system describing the behaviour of cells migrating as a response to chemotaxis is developed. The proposed emulator employs Gaussian process (GP) regression for each parameter separately (multivariate output GP regression is left for further research). Hyperparameters of each GP are estimated with maximum likelihood based on a training set of 1000 points generated from a Sobol sequence. The choice of the optimal (in the sense of minimising RMSE) kernel function for each regression is made based on the out-of-sample performance on the test set of 100 points generated from a Latin hypercube. Efficient feature extraction is crucial for the performance of any regression model and is particularly challenging in this case due to the high-dimensional output of the SDE simulator. The lack of alignment between the output points on the membrane over time and time-varying dimensions of the data pose additional difficulties. To detect potentially relevant features an extensive exploration was performed, separately for Model 3 (including signals unobserved in laboratory experiments) and the Additional Challenge (based on observed measurements only). The resulting insights suggest the importance of allowing for scale, translation and rotation invariance of potential measures. Hence, PCA based on Fourier transforms of the signals and cell contours is implemented leading to the extraction of several resulting features. In addition, the time series of ratios of cell area to its perimeter is investigated and the label of a model best fitting to this series taken as an explanatory variable. In total 56 and 31 variables are considered for Model 3 and the Additional Challenge, respectively.</div> </p>
</div>

<i class="fa fa-download fa-ld" aria-hidden="true"></i> Slides: <a class="page-link" href="{{ '/research/A.Borowska - GP emulation for chemotaxis.pdf' | prepend: site.baseurl | prepend: site.url }}">GP emulation for chemotaxis.pdf</a>