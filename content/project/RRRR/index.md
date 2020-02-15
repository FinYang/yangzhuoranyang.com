+++
# Project title.
title = "Online Robust Reduced-Rank Regression"

# Date this page was created.
date = 2020-02-15T14:35:00+08:00

# Project summary to display on homepage.
summary = "Online Robust Reduced-Rank Regression via Stochastic Majorization Minimization"

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["multivariate regression", "majorization minimization", "stochastic optimization", "dimension Reduction"]

# Optional external URL for project (replaces project detail page).
external_link = ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides = ""

# Links (optional).
url_pdf = ""
url_slides = ""
url_video = ""
url_code = "https://pkg.yangzhuoranyang.com/RRRR/"

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# url_custom = [{icon_pack = "fab", icon="twitter", name="Follow", url = "https://twitter.com/georgecushen"}]

# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder. 
[image]
  # Caption (optional)
  # caption = "Photo by rawpixel on Unsplash"
  
  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Center"
+++


The reduced-rank regression (RRR) model is widely used in data analytics where the response variables are believed to depend on a few linear combinations of the predictor variables, or when such linear combinations are of special interest. In this paper, we will address the RRR model estimation problem by considering two targets which are popular especially in big data applications: i) the estimation should be robust to heavytailed data distribution or outliers; ii) the estimation should be amenable to large-scale data sets or data streams. In this paper, we address the robustness via the robust maximum likelihood estimation procedure based on Cauchy distribution and a stochastic estimation procedure is further adopted to deal with the large-scale data sets. An efficient algorithm leveraging on the stochastic majorization minimization method is proposed for problem-solving. The proposed model and algorithm is validated numerically by comparing with the state-of-the-art methods
