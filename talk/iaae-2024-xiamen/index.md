---
date: 2024-06-07
title: "Forecast Linear Augmented Projection (FLAP): A free lunch to reduce forecast error variance"
venue: IAAE 2024 Annual Conference, Xiamen, China
pdf: https://raw.githubusercontent.com/FinYang/paper-forecast-projection/main/slides/flap-slides.pdf
abstract: "A novel forecast linear augmented projection (FLAP) method is introduced, which reduces the forecast error variance of any unbiased multivariate forecast without introducing bias. The method first constructs new component series which are linear combinations of the original series. Forecasts are then generated for both the original and component series. Finally, the full vector of forecasts is projected onto a linear subspace where the constraints implied by the combination weights hold. It is proven that the trace of the forecast error variance is non-increasing with the number of components, and mild conditions are established for which it is strictly decreasing. It is also shown that the proposed method achieves maximum forecast error variance reduction among linear projection methods. The theoretical results are validated through simulations and two empirical applications based on Australian tourism and FRED-MD data. Notably, using FLAP with Principal Component Analysis (PCA) to construct the new series leads to substantial forecast error variance reduction."
---

### R package

* [flap](https://github.com/FinYang/flap)

### Working paper

* [Yang, Yangzhuoran Fin, George Athanasopoulos, Rob J. Hyndman, and Anastasios Panagiotelis. 2024. "Forecast Linear Augmented Projection (FLAP): A Free Lunch to Reduce Forecast Error Variance."](/publication/flap/)