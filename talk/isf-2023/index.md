---
date: 2023-06-26
title: Forecast Multivariate Time Series Using Lower Dimensional Components
venue: 43th International Symposium On Forecasting, Charlottesville, USA
pdf: https://raw.githubusercontent.com/FinYang/talk.ComponentsForecast/main/components-forecast.pdf
github: FinYang/talk.ComponentsForecast
---

### Abstract

High-dimensional multivariate forecasting is often restricted to univariate models that do not consider inter-series relationships or multivariate models that are difficult to estimate. Dynamic Factor Model gained popularity by using factors to capture common signals but is limited to linear transformations of series. We propose a framework to forecast multivariate time series using potentially nonlinear components, which capture common patterns shared across series. This procedure does not limit the choice of forecast model but serves as additional steps. It is applicable even to components without an inherent back-transformation by training a back-transformation model using bootstrap samples and expanding
windows. We demonstrate its usage with principal component analysis in a simulation example. In the application of Australian tourism data, using principal components and ISOMAP to forecast has shown superior performance in short-term forecasting while Laplacian Eigenmaps have shown competitive results for longer forecast horizons. The forecast performance is found to be robust to the number of components.
