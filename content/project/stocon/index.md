+++
# Project title.
title = "Dimension Reduction in Stochastic Optimal Control"

# Date this page was created.
date = 2019-10-05T23:30:00+10:00

# Project summary to display on homepage.
summary = "Optimal portfolio selection via dimensional reduction in a stochastic optional control setting"

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["Dimension Reduction", "Portfolio Selection", "Stochastic Control"]

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
url_code = "https://pkg.yangzhuoranyang.com/stocon/"

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


While the classical Merton type framework is among the most comprehensively studied and has spurred an extensive theoretical literature, its empirical implementation has been disappointing with a large literature documenting its shortcomings. In particular, its numerical implementation via stochastic dynamic programming has been neglected in the community largely due to the curse of dimensionality. The objective of this project is to explore the recent advances in the statistical community for dimension reduction in such a way that the dimension reduction of the objective functions is aligned with portfolio optimisation in the context of stochastic optimal control setting and ultimately results in a better portfolio performance in a high dimensional investment space. 
