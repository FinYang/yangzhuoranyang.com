+++
title = "Forecast reconciliation with linear combinations (abstract)"
date = 2020-12-03T11:30:00+08:00  # Schedule page publish date.
draft = false

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
time_start = 2020-12-03T11:30:00+08:00
time_end = 2020-12-03T11:45:00+08:00

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Yangzhuoran Fin Yang", "Rob J. Hyndman", "George Athanasopoulos", "Anastasios Panagiotelis"]

# Abstract and optional shortened version.

abstract = ""

# Name of event and optional event URL.
event = "Doctoral Research Colloquium, Monash Business School"
event_url = "https://www.monash.edu/business/doctoral-colloquium"

# Location of event.
location = "Clayton, Australia (Online)"

# Is this a selected talk? (true/false)
selected = true

# Projects (optional).
#   Associate this talk with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = []

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["hierarchical time series", "reconciliation", "linear combination"]

# Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides = "example-slides"

# Links (optional).
url_pdf = "talks/colloquium2020_slides.pdf"
url_slides = ""
url_video = ""
url_code = ""

# Does the content use math formatting?
math = true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  # caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Right"
  
  
# links:
# - icon: github
#   icon_pack: fab
#   url: https://github.com/FinYang/stocon
# - icon: book
#   icon_pack: fas
#   name: Package stocon
#   url: https://pkg.yangzhuoranyang.com/stocon/

# links: 
# - icon: twitter 
#   icon_pack: fab 
#   name: Follow 
#   url: https://twitter.com/georgecushen

# <iframe src="https://docs.google.com/viewerng/viewer?url=https://github.com/FinYang/yangzhuoranyang.com/raw/master/static/talks/stocon_pre1.pdf&embedded=true" width="640" height="480"></iframe>
+++
Collections of time series often exhibit hierarchical structures, which are linear constraints that allow higher levels of series to be disaggregated to lower levels.  The property that the forecasts also add up corresponding to the aggregation structure is referred to as coherency.

Traditional approaches achieve coherency by forecasting a single level of time series and rearranging it to obtain forecasts of all levels based on the structure. In contrast to traditional approaches, forecasting reconciliation combines forecasts for all levels of time series in the collection. It makes use of correlations across levels of the hierarchy that the traditional methods overlook to improve the accuracy of the forecasts.
 
In this paper, we expand the reconciliation technique to also include the forecasts of general linear combinations of series, known as components. A set of components that makes use of the underlying interaction between series and aims at increasing forecast accuracy can improve the performance of reconciliation.

We explore two sets of components. The first one is from the well known principal component analysis because of its well-studied properties and relatively efficient computation. The second one is from forecastable component analysis (ForeCA), which aims to maximise a measure of forecastability calculated from the Shannon entropy of the spectral density. We introduce an efficient computing method of using ForeCA in forecast reconciliation. Performance of the proposed method is evaluated using simulation data and Australian tourism data.

<iframe src="https://drive.google.com/viewerng/
viewer?embedded=true&url=https://yangzhuoranyang.com/talks/colloquium2020_slides.pdf" width="800" height="600" frameborder="0"></iframe>