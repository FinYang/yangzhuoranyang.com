+++
title = "Hideous cheatsheet"

date = 2019-05-01
# lastmod = 2018-09-09T00:00:00

# List format.
#   0 = Simple
#   1 = Detailed
#   2 = Stream
list_format = 2

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""
+++

```r

start <- as.Date("2018-08-14")
paste("I have started my timetable for", (Sys.Date() - start + 1), "days.")
time1 <- Sys.time()
time2 <- Sys.time()
time2 - time1


# Names and Values --------------------------------------------------------

library(lobstr)
obj_addr(mean)
obj_addr(base::mean)
obj_addr(get("mean"))
obj_addr(evalq(mean))
obj_addr(match.fun("mean"))

# R -----------------------------------------------------------------------

a = 132
b <- 321
231 ->c
?abs # return absolute value
??absolute

# 5 atomic classes
class(a)
# 3 number types
# numeric (default) double 8 bytes
Inf
# integer 4 bytes (prefered when data are large)
a <- 132L
# complex
c <- 2 + 3i
# 1 character type
# 1 logical type
TRUE
T
FALSE
F
typeof(a)
# logical opeartors
# AND
&
# OR
|
# NOT
!


# vector
1:10
seq_len(10)
vec <- vector(length = 5)
length(vec)
vec <- c(b,c,d)
vec[1]
vec[1:2]
vec[c(1,3)]
names(vec)
names(vec) <- c("","")


subset()
order()
a[order(a)] # ascending or decending order
sort()

# factor (out of vector)
fac <- as.factor(f)
# A character vector that also stores every unique value in the vector,
# and use these unique values and indexs them and fills them in
levels(fac) # return those unique values
levels(fac) <- c("","","") # reasign new levels

fac[1:2]
fac[fac == "New York"]

# nominal categorical variable, no order
# ordinal categorical variable, natural ordering
factor_temporature_vector <- factor(temperature_vector, order = TRUE,
                                    levels = c("Low", "Medium", "High"))

# Matrix
vac.a <- c(1, 2, 3, 4)
vac.b <- c(8, 19, 15, 17)
mat.c <- cbind(vac.a, vac.b) # as column
mat.r <- rbind(vec.a, vec.b) # as row
rowSums()
colSums()
mat.r[1,2]
dim(mat.c)
dim(mat.c) <- c(2,4)

mat.c[, 1]
mat.c[1, ]
mat.c[, "vec.a"]
mat.c[, c("vec.a", "vec.c")]
dimnames(mat.c) # must be a list
colnames(mat.c)
rownames(mat.c)
colnames(mat.c) <- c("alpha", "beta", "gamma")
nrow(mat.c)
ncol(mat.c)

# Data frame
data(iris)
head(iris)
tail(iris)
data.frame()
str()
iris$Species
iris[iris$Sepal.Length > 6.5, ]
iris[iris$Sepal.Length > 6.5, c("Sepal.Width", "Species")]


# List
list.a <- list(1, "a", TRUE, 2+5i)
list[5] # return 5th element as a list
list[[5]] # return 5th element as its original class
list.b <- list(a = c(T, T, F, F), b = 2, c = "Hello")
list.b$a
list.b[["a"]]
names(my.list) <- c("name1", "name2")
ext_list <- c(ext_list, new_name = new_val)
# list to dataframe
do.call(rbind, list)
# dataframe to list
setNames(split(month.name, 1:12), month.abb)

as.factor()
as.integer(23.4)
as.numeric(2+3i)
as.complex(2)
as.character(34)

class(34) == "integer"
is.integer(34)
is.integer(34L)

# Install
install.packages("plyr")
library(plyr)
attach()
# working directory
getwd()
setwd("./bootcamp") # in additional on the orginal one
dir() # list the files in current directory
source("") # run previously written script after properly setting directory
# Global options
options()
par().



# remove all objects
rm(list=ls())

View()
ls()
show()

# modulo
5 %% 2
# The modulo returns the reminder of the division of the number to the left
# by the number on its right

# random number
runif()
rnorm()

# loops
for(var in seq){
  expr
  next #skip to next iteration
}

# progress bar

pb <- txtProgressBar(min = 0, max = total, style = 3)
for(i in 1:total){
  Sys.sleep(0.1)
  # update progress bar
  setTxtProgressBar(pb, i)
}
close(pb)
ctr <- 1
while(ctr <= 7){
  if(ctr %% 5 ==0){
    break # abandon the active loop
  }
  print(paste("cte is set to", ctr))
  ctr <- ctr + 1
}

# stack matrix
t(replicate(2,1:5))

# symmetric matrixg
s.diag = diag(s)
s[lower.tri(s,diag=T)] = 0
s = s + t(s) + diag(s.diag,S)


# spelling check ----------------------------------------------------------

spelling::spell_check_package(getwd())
#or
F7

# function ----------------------------------------------------------------
function_name <- function(args){
  do_stuff
}

args() #check arguments without checking documentation

print()
str()
summary()
sqrt()
mean()
median()
sum()
round() # number of digits

append() # vector merging
rec() # Reverse Elements


# knitr -------------------------------------------------------------------

read_chunk("lab04.R")
list.files(getwd())
knitr::purl("LP_simulation.Rmd")

# tidyr verbs --------------------------------------------------------------

library(tidyr)
# Gather: specify the keys (identifiers) and the values (measures) to make long form ("melting")
# key: name of the column of variables
# value: name of the column of values
# V1:V3 columns that need to be gathered
gather(data, key = variable, value = rating, V1:V3)

# Spread: long to wide, variables in columns ("casting")
spread(data, key = variable, value = rating)

# nest/unnest: working with lists
# separate/unite: split and combine columns

# Split-apply-combine approach
# 1. Split a dataset into many smaller sub-datasets
# 2. Apply some  function to each sub-dataset to compute a result
# 3. Combine the results of the function calls into one dataset
ff_summary <- ff_long %>% group_by(variable) %>% # SPLIT
  summarise(
    m = mean(rating, na.rm = TRUE),
    s = sd(rating, na.rm = TRUE)
  ) # APPLY + COMBINE

# dplyr verbs -------------------------------------------------------------

# Filter: Remove the rows of a date frame, producing subsets (on obvervation)
data %>% filter(variable1 == value)
# Arrange: Reorder the rows of a data frame
data %>% arrange(desc(variable))
# Select: Select particular columns of a data frame (on variables)
data %>% select(var1, var2, var3)
# Mutate: Add new columns that are functions of existing columns
data %>% mutate(varname = )
# Summarise: Create collapsed summaries of a data frame
data %>% group_by(var1, var2) %>%  summarise(mean_var3 = mean(var3), sd_var3 = sd(var3))
# Rename: Rename variables in a data frame
rename()
# group_by: takes and existing tbl and converts it into a grouped tbl
group_by()


# tibble ------------------------------------------------------------------

library(tibble)
vignette("tibble")
add_row(df, x=4, y=0, .before = 2)
add_column(z = -1:1, .after = "x")

yawn_expt <- tibble(group = c(rep("control", 16),
                              rep("treatment", 34)),
                    yawn = c(rep("no", 12), rep("yes", 4),
                             rep("no", 24), rep("yes", 10)))
yawn_expt %>%
  group_by(group, yawn) %>%
  tally() %>% #count the number of wach group
  ungroup() %>%
  spread(yawn, n) %>%
  mutate(total = rowSums(.[-1]))


# Plot, ggplot2 -----------------------------------------------------------------

# plot
plot(x,y)
hist(x)
boxplot(x)
par(mfrow = c(1,2))
plot(iris$Petal.Width, iris$Petal.Length, main = "") # naming the plot
library(lattice)
histogram(iris$Petal.Width)

curve

# ggplot2

library(ggplot2)
ggplot(data = economics, aes(x = pce)) +
  geom_histogram(binwidth = 500,  colour = "blue", fill ="lightblue")+
  geom_vline(xintercept = 10000 , colour = "red")

#density curves for Weibull
xgrid <- seq(0, 5, 0.05)
df <- data.frame(
  x = xgrid,
  d1 = dweibull(xgrid, shape = 3, scale = 1.5),
  d2 = dweibull(xgrid, shape = 2, scale = 2),
  d3 = dweibull(xgrid, shape = 1, scale = 1)
)
df <- df %>%
  gather(dist, density, d1:d3) %>%
  mutate(dist = factor(
    dist, levels = c("d1", "d2", "d3"),
    labels = c("Weibull(3, 1.5)", "Weibull(2, 2)", "Weibull(1, 1)")
  ))
ggplot(df, aes(x=x, y=density, colour = dist)) +
  geom_line()

#theme
savep50 <- function(pdata, i){
  ggplot(as.data.frame(pdata), aes(x = yhat, y=res, alpha = 0.05)) +
    geom_point() +
    xlim(c(-4, 4)) +
    ylim(c(-4, 4)) +
    theme(axis.line=element_blank(),
          axis.text.x=element_blank(),
          axis.text.y=element_blank(),
          axis.ticks=element_blank(),
          axis.title.x=element_blank(),
          axis.title.y=element_blank(),
          legend.position="none",
          panel.background=element_blank(),
          panel.border=element_blank(),
          panel.grid.major=element_blank(),
          panel.grid.minor=element_blank(),
          plot.background=element_blank())
  ggsave(filename = paste("p50_", i, ".png", sep = ""), height = 4, width = 4, dpi = 500)

}

mapply(savep50, train50, c(1:1000))

# QQ-plot
set.seed(123)
n <- 500
alpha <- 4
beta <- 2
df_gamma <- data.frame(
  xgamma = rgamma(n, shape = alpha, rate = beta)
)
df_gamma$xq <- qgamma(
  c(1 - 0.5^(1/n), # i = 1
    (2:(n-1) - 0.3175) / (n + 0.365), # i = 2, ... , n - 1
    0.5^(1/n)), # i = n
  alpha, beta
) # theoretical quantiles
ggplot(data = df_gamma, aes(x = sort(xgamma), y = xq)) +
  geom_point() +
  geom_abline(intercept = 0, slope = 1) + # X = Y line
  xlab("Sample quantiles") +
  ylab("Theoretical quantiles") +
  coord_equal()


# likelihood, plotly, 3D plot ---------------------------------------------

# likelihood
set.seed(123)
X2 <- data.frame(x = rgamma(n = 544, 3.2, 1.7))
ggplot(X2, aes(x = x)) +
  geom_histogram(bindwidth = 0.3)
nmle <- function(x, alpha, beta){
  likelihood <- prod(dgamma(x, alpha, beta))
  return(likelihood)
}
alpha <- seq(2.7, 3.8, 0.01)
beta <- seq(1.45, 2.2, 0.01)
# all possible combinations of alpha and beta
g <- expand.grid(x = alpha, y = beta)
g$l <- 0
for(i in 1:nrow(g)){
  g$l[i] <- nmle(X2$x, g$x[i], g$y[i])
}
ggplot(g, aes(x=x, y=y, fill=l)) +
  geom_tile() +
  scale_fill_continuous("L") +
  xlab(expression(alpha)) +
  ylab(expression(beta)) +
  theme_bw() + # the classic dark-on-light ggplot2 theme
  theme(aspect.ratio = 1)
max(g$l)
g[which.max(g$l),]

# find MLE using MASS package
library(MASS)
fitdistr(X2$x, "gamma")

# interactive 3D plotly
m <- matrix(g$l, nrow = length(alpha))
library(plotly)
plot_ly(x = ~ beta, y = ~ alpha, z = m) %>%
  add_surface()

snake <- function(dl){
  nc <- ncol(dl)
  mapply(function(a,b) ifelse(rep(a %% 2==0, length(b)), rev(b), b), a=1:nc, b=(apply(dl,2,list) %>% unlist(recursive = F))) %>% c}
dt=0.01
t <- t(matrix(seq(from = 0.1, to = 1, by = dt)))
x <- (matrix(seq(from = -2, to = 2, by = 0.02)))
f <- dnorm(x[,rep(1, length(t))], 0,sqrt(t)[rep(1, length(x)),])
a <- x[,rep(1, length(t))] %>% snake
b <- t[rep(1, length(x)),] %>% snake
c <- snake(f)
p_BM <- plot_ly(data.frame(a,b,c), x = ~a, y = ~b, z = ~c, type = 'scatter3d', mode = 'lines',  line = list(color = ~c,colorscale = 'Viridis')) %>%
  layout(
    # title = "Layout options in a 3d scatter plot",
    scene = list(
      xaxis = list(title = "Variable"),
      yaxis = list(title = "Time"),
      zaxis = list(title = "Probability")
    ))
# plot_ly(z=~f) %>%  add_surface()
(p_BM)



# Apply family ------------------------------------------------------------

apply(array, margin, ...)

# lapply
lapply(x, FUN, argument, ...)
unlist(lapply(x, FUN, argument, ...))


# sapply
sapply()
sapply(x, FUN, USA.NAMES = FALSE)

unique(x) # extract unique elements
identical(x, y) # test if identical

# vpply
# explicitly specify output format
vapply(X, FUN, FUN.VALUE = numeric(3) , ..., USE.NAMES = TRUE)



# Times and Dates ---------------------------------------------------------

# Default "%Y-%m-%d" or "%Y/%m/%d"
# %Y: 4-digit year (1982)
# %y: 2-digit year (82)
# %m: 2-digit month (01)
# %d: 2-digit day of the month (13)
# %A: weekday (Wednesday)
# %a: abbreviated weekday (Wed)
# %B: month (January)
# %b: abbreviated month (Jan)

as.Date("1982-01-13")
as.Date("Jan-13-82", format = "%b-%d-%y")
as.Date("13 January, 1982", format = "%d %B, %Y")
format(Sys.Date(), format = "%d %B, %Y")
format(Sys.Date(), format = "Today is a %A!")

today <- Sys.Date()
class(today)
my_date <- as.Date("1971-05-14") # Default format "%Y-%m-%d" 4-2-2 digits
my_date <- as.Date("1971-14-05", format = "%Y-%d-%m")
my_date + 1 # days incremented by 1
my_date2 <- as.Date("1998-09-29")
my_date2 - my_date
unclass(my_date) # 498 days from January 1, 1970

?strptime
# Default "%Y-%m-%d %H:%M:%S"
# %H: hours as a decimal number (00-23)
# %I: hours as a decimal number (01-12)
# %M: minutes as a decimal number
# %S: seconds as a decimal number
# %T: shorthand notation for the typical format %H:%M:%S
# %p: AM/PM indicator

str1 <- "May 23, '96 hours:23 minutes:01 seconds:45"
str2 <- "2012-3-12 14:23:08"
time1 <- as.POSIXct(str1, format = "%B %d, '%y hours:%H minutes:%M seconds:%S")
time2 <- as.POSIXct(str2, format = "%Y-%m-%d %T")

now <- Sys.time()
class(now)
my_time <- as.POSIXct("1971-05-12 11:25:15")
my_time + 1 # seconds incremented by 1
my_time2 <- as.POSIXct("1974-07-14 21:11:55 CET")
unclass(my_time) # 43M seconds from January 1, 1970, 00:00:00



# lubridate
library(lubridate)
now()
now(tz = "America/Chicago")
today()
now() + hours(4)
today() - days(2)
ymd("2013-05-14")
mdy("05/14/2013")
dmy("14052013")
month(dmy("14052013"))

floor_date()

# zoo
library(zoo)
# xts
library(xts)

# Reading different file formats: shapefiles ------------------------------

# The Australian Electorate Commission publishes the boundaries
# of the electorates on their website
# at http://www.aec.gov.au/Electorates/gis/gis_datadownload.htm.
# Once the files (preferably the national files) are downloaded,
# unzip the file (it will build a folder with a set of files).
# We want to read the shapes contained in the shp file into R.

library(maptools)

# shapeFile contains the path to the shp file:
shapeFile <- "../data/vic-esri-24122010/vic 24122010.shp"
sF <- readShapeSpatial(shapeFile)
class(sF)
#> [1] "SpatialPolygonsDataFrame"
#> attr(,"package")
#> [1] "sp"

# sF is a spatial data frame containing all of the polygons.
# We use the rmapshaper package available from ateucher's github page
# to thin the polygons while preserving the geography:
library(rmapshaper)
sFsmall <- ms_simplify(sF, keep=0.05) # use instead of thinnedSpatialPoly
# keep indicates the percentage of points we want to keep in the polygons.
# 5% makes the electorate boundary still quite recognizable,
# but reduce the overall size of the map considerably, making it faster to plot.
plot(sFsmall)


# Extracting the electorate information

# A spatial polygons data frame consists of both a data set with
# information on each of the entities (in this case, electorates),
# and a set of polygons for each electorate
# (sometimes multiple polygons are needed, e.g. if the electorate has islands).
# We want to extract both of these parts.
nat_data <- sF@data
head(nat_data)
# The row names of the data file are identifiers corresponding to the polygons
# - we want to make them a separate variable:
nat_data$id <- row.names(nat_data)

# Extracting the polygon information

# The fortify function in the ggplot2 package extracts the polygons into a data frame.
nat_map <- ggplot2::fortify(sFsmall)
head(nat_map)
# We need to make sure that group and piece are kept as factor variables
# - if they are allowed to be converted to numeric values, it messes things up,
# because as factor levels 9 and 9.0 are distinct, whereas they are not when
# interpreted as numbers ...
nat_map$group <- paste("g",nat_map$group,sep=".")
nat_map$piece <- paste("p",nat_map$piece,sep=".")
head(nat_map)

ggplot(nat_map, aes(x=long, y=lat, group=group)) +
  geom_polygon(fill="white", colour="black")
ggplot(nat_data, aes(fill=AREA_SQKM)) +
  geom_map(aes(map_id=id), map=nat_map) +
  expand_limits(x=nat_map$long, y=nat_map$lat) +
  theme_map()


# Missing values -------------------------------------------------

NA # a missing data piece
NaN # not a number
NULL # nothing at all, don't exist
is.na()
is.nan()
na.omit()

library(naniar)
vis_miss(tao, sort_miss=TRUE) + theme(aspect.ratio=1)

# Proportion of observations missing:
s_miss <- miss_summary(tao)
s_miss$miss_df_prop

# Proportion of variables missing:
s_miss$miss_var_prop

# How many observations have $k$ missings?
s_miss$miss_case_table

# By group
s_miss_group <- tao %>%
  group_by(year) %>% miss_summary()
s_miss_group$miss_case_table

# Missings shouldn't be ignored but most software will simply drop them!
ggplot(tao,
       aes(x = sea.surface.temp,
           y = humidity)) +
  geom_point() + theme(aspect.ratio=1)
# Keep them in the plot
ggplot(tao,
       aes(x = sea.surface.temp,
           y = humidity)) +
  scale_colour_brewer(palette="Dark2") +
  geom_miss_point() + theme(aspect.ratio=1)
# by year
ggplot(tao,
       aes(x = sea.surface.temp,
           y = humidity)) +
  geom_miss_point() +
  scale_colour_brewer(palette="Dark2") +
  facet_wrap(~year) +
  theme(aspect.ratio=1)
# Understanding missing dependencies
ggplot(tao,
       aes(x = sea.surface.temp,
           y = air.temp)) +
  geom_miss_point() +
  scale_colour_brewer(palette="Dark2") +
  facet_wrap(~year) +
  theme(aspect.ratio=1)
# Year needs to be accounted for in finding good substu=itute values.
# Relationship with other variables
tao_shadow <- bind_shadow(tao)
ggplot(data = tao_shadow,
       aes(x = uwind, y=vwind, colour=air.temp_NA)) +
  scale_colour_brewer(palette="Dark2") +
  geom_point() + theme(aspect.ratio=1)

# Common ways to impute values

# - Simple parametric: use the mean or median of the complete cases for each variable
# - Simple non-parametric: find the $k$ nearest neighbours with a complete value
# and average these
# - Multiple imputation: Use a statistical distribution,
# e.g. normal model and simulate a value (or set of values, hot deck imputation) for the missings

# Examples - using the mean and ignoring year.
tao_shadow <- tao_shadow %>%
  mutate(sea.surface.temp = ifelse(is.na(sea.surface.temp),
                                   mean(sea.surface.temp, na.rm=TRUE),
                                   sea.surface.temp),
         air.temp = ifelse(is.na(air.temp),
                           mean(air.temp, na.rm=TRUE),
                           air.temp))
ggplot(tao_shadow,
       aes(x = sea.surface.temp,
           y = air.temp,
           colour=air.temp_NA)) +
  geom_point(alpha=0.7) +
  facet_wrap(~year) +
  scale_colour_brewer(palette="Dark2") +
  theme(aspect.ratio=1)
# by year
t93 <- bind_shadow(tao) %>%
  filter(year=="1993") %>%
  mutate(sea.surface.temp = ifelse(is.na(sea.surface.temp),
                                   mean(sea.surface.temp, na.rm=TRUE),
                                   sea.surface.temp),
         air.temp = ifelse(is.na(air.temp),
                           mean(air.temp, na.rm=TRUE),
                           air.temp))
t97 <- bind_shadow(tao) %>%
  filter(year=="1997") %>%
  mutate(sea.surface.temp = ifelse(is.na(sea.surface.temp),
                                   mean(sea.surface.temp, na.rm=TRUE),
                                   sea.surface.temp),
         air.temp = ifelse(is.na(air.temp),
                           mean(air.temp, na.rm=TRUE),
                           air.temp))

tao_shadow <- bind_rows(t93, t97)

ggplot(tao_shadow,
       aes(x = sea.surface.temp,
           y = air.temp,
           colour=air.temp_NA)) +
  geom_point(alpha=0.7) +
  facet_wrap(~year) +
  scale_colour_brewer(palette="Dark2") +
  theme(aspect.ratio=1)
# Nearest neighbors imputation
#source("https://bioconductor.org/biocLite.R")
#biocLite("impute")
library(impute)
tao_impute <- bind_shadow(tao) %>%
  arrange(year, sea.surface.temp, air.temp) %>%
  select(sea.surface.temp, air.temp)
tao_impute <- impute.knn(as.matrix(tao_impute), 5)
tao_shadow <- bind_shadow(tao) %>%
  arrange(year, sea.surface.temp, air.temp) %>%
  mutate(sea.surface.temp = tao_impute$data[,1],
         air.temp = tao_impute$data[,2])
ggplot(tao_shadow,
       aes(x = sea.surface.temp,
           y = air.temp,
           colour=air.temp_NA)) +
  geom_point(alpha=0.7) +
  facet_wrap(~year) +
  scale_colour_brewer(palette="Dark2") +
  theme(aspect.ratio=1)
# by year
tao_impute_93 <- bind_shadow(tao) %>%
  arrange(year, sea.surface.temp, air.temp) %>%
  filter(year=="1993") %>%
  select(sea.surface.temp, air.temp)
tao_impute_93 <- impute.knn(as.matrix(tao_impute_93), 5)
tao_impute_97 <- bind_shadow(tao) %>%
  arrange(year, sea.surface.temp, air.temp) %>%
  filter(year=="1997") %>%
  select(sea.surface.temp, air.temp)
tao_impute_97 <- impute.knn(as.matrix(tao_impute_97), 5)
tao_impute <- rbind(tao_impute_93$data, tao_impute_97$data)
tao_shadow <- bind_shadow(tao) %>%
  arrange(year, sea.surface.temp, air.temp) %>%
  mutate(sea.surface.temp = tao_impute[,1],
         air.temp = tao_impute[,2])
ggplot(tao_shadow,
       aes(x = sea.surface.temp,
           y = air.temp,
           colour=air.temp_NA)) +
  geom_point(alpha=0.5) +
  facet_wrap(~year) +
  scale_colour_brewer(palette="Dark2") +
  theme(aspect.ratio=1)


# Working with text -------------------------------------------------------

tb <- read_csv("../data/tb.csv")
tb[7:10,1:10]

# Convert to long form
tb_long <- tb %>% gather(variable, count, m_04:f_u)
head(tb_long)

# String split
tb_long <- tb_long %>% separate(variable, c("gender", "age"))
head(tb_long)

# Take a look
tb_long %>% filter(iso2 == "CO", age!="u", year>1998) %>%
  ggplot(aes(x=year, y=count, colour=gender)) +
  geom_point() + facet_wrap(~age, ncol=3) +
  scale_color_brewer(palette="Dark2")

# Resourceson regular expressions from stat545 at ISU
# https://stat585-at-isu.github.io/materials/07_regular-expressions/01_regular_expressions.html)


# Web scraping ------------------------------------------------------------

library(ggthemes)
library(HLMdiag)
#   - Example: NBA salaries
# - ESPN provides basketball players' salaries for the 2017-2018 season
# at [http://espn.go.com/nba/salaries](http://espn.go.com/nba/salaries)
library(XML)
nba <- NULL
for (i in 1:11) {
  temp <- readHTMLTable(
    sprintf("http://espn.go.com/nba/salaries/_/page/%d",i))[[1]]
  nba <- rbind(nba, temp)
}
glimpse(nba)

# Text massaging
head(nba$SALARY)

# get rid of $ and , in salaries and convert to numeric:
gsub("[$,]", "", head(as.character(nba$SALARY)))
nba$SALARY <- as.numeric(gsub("[$,]", "",
                              as.character(nba$SALARY)))
head(nba$SALARY)


# Cleaning NBA salaries data: hunting the warning
nba %>% filter(is.na(SALARY)) %>% head()
# - We don't need these rows - delete all of them

dim(nba)
nba <- nba[-which(nba$RK=="RK"),]
dim(nba)

# Cleaning NBA data
# - Separate names into first, last, and position
nba <- nba %>%
  mutate(NAME = as.character(nba$NAME)) %>%
  separate(NAME, c("full_name", "position"), ",") %>%
  separate(full_name, c("first", "last"), " ")
head(nba)
# Cleaned data ...?
# - Numbers might still be wrong, but now we are in a position to check for that.
ggplot(data=nba, aes(x=SALARY)) + geom_histogram()

# Web scraping resources
#   - Carson Sievert's [tutorial](https://slides.cpsievert.me/web-scraping/20150612/)
# - Ankit Agarwal's blog
# (http://brazenly.blogspot.com.au/2016/05/r-consummate-all-encompassing-tool-for.html);
# Look for several more advanced scraping
# - R Blogger's [post](https://www.r-bloggers.com/scraping-with-selenium/)

library(rvest)
tem <- list()
for(i in 2011:2017){
  tem[[i-2010]] <- read_html(paste0("https://www.wunderground.com/history/airport/YMML/",
                                   i,
                                   "/5/4/MonthlyHistory.html?req_city=&req_state=
                                   &req_statename=&reqdb.zip=&reqdb.magic=&reqdb.wmo="))  %>%
    html_node("#obsTable") %>% html_table()

}

read_html("https://robjhyndman.com/hyndsight/show-me-the-evidence/") %>%
  html_node("table") %>% html_table() %>% kable()
read_html("https://robjhyndman.com/hyndsight/show-me-the-evidence/") %>%
html_node("table:nth-child(8)") %>% html_table() %>% kable()

# Character manipulation / Regular expression --------------------------------------------------

?regex
??`regular expression`
strsplit(c("lawrence", "beautiful"),"e")
tolower() # convert strins to lower case latters
cat() #Concatenate and Print
gsub(pattern, replacement, x) # pattern matching and replacement


# grepl
# logical output
grepl(patter = <regex>, x = <string>)
animals <- c("cat", "moose", "impala", "ant", "kiwi")
grepl(pattern = "a", x = animals)
grepl(pattern = "^a", x = animals) # beginning with an "a"
grepl(pattern = "a$", x = animals) # end with an "a"

# grep
# indice output
which(grepl(pattern = "a", x = animals) )
animals <- c("cat", "moose", "impala", "ant", "kiwi")
grep(pattern = "a", x = animals)
grep(pattern = "^a", x = animals) # beginning with an "a"
grep(pattern = "a$", x = animals) # end with an "a"

emails <- c("john.doe@ivyleague.edu", "education@world.gov", "dalai.lama@peace.org",
            "invalid.edu", "quant@bigdatacollege.edu", "cookie.monster@sesame.tv")
grepl("@.*\\.edu$", emails) #any character (.) zero or more times (*). The \\ part escapes the dot


# sub, gsub
sub(pattern = <regex>, replacement = <str>, x = <str>)
animals <- c("cat", "moose", "impala", "ant", "kiwi")
sub(pattern = "a", replacement = "o", x = animals) # replace first match
gsub(pattern = "a", replacement = "o", x = animals) # replace all matches
gsub(pattern = "a|i", replacement = "_", x = animals)

awards <- c("Won 1 Oscar.",
            "Won 1 Oscar. Another 9 wins & 24 nominations.",
            "1 win and 2 nominations.",
            "2 wins & 3 nominations.",
            "Nominated for 2 Golden Globes. 1 more win & 2 nominations.",
            "4 wins & 1 nomination.")

sub(".*\\s([0-9]+)\\snomination.*$", "\\1", awards)
# .*: A usual suspect! It can be read as "any character that is matched zero or more times".
# \\s: Match a space. The "s" is normally a character, escaping it (\\) makes it a metacharacter.
# [0-9]+: Match the numbers 0 to 9, at least once (+).
# ([0-9]+): The parentheses are used to make parts of the matching string available to define
# the replacement.
# The \\1 in the replacement argument of sub() gets set to the string that is captured
# by the regular expression [0-9]+.



# Grammar of graphics and statistics --------------------------------------


# Pipeline: Messy to tidy to plot
messy_data <- read_csv("../data/tb.csv")
head(messy_data)
tidy_data <- messy_data %>%
  gather(demo, count, -year, -iso2, na.rm = TRUE) %>%
  separate(demo, c("gender", "age"))
tidy_data <- tidy_data %>%
  filter(!(age %in% c("014", "04", "514", "u")))
head(tidy_data)
# 100% charts
tidy_data %>%
  filter(iso2 == "AU") %>%
  ggplot(aes(x = year, y = count, fill = gender)) +
  geom_bar(stat = "identity", position = "fill") +
  facet_grid(~ age) +
  scale_fill_brewer(palette="Dark2")
# Stacked barcharts
tidy_data %>%
  filter(iso2 == "AU") %>%
  ggplot(aes(x = year, y = count, fill = gender)) +
  geom_bar(stat = "identity") +
  facet_grid(~ age) +
  scale_fill_brewer(palette="Dark2") +
  theme(
    axis.text = element_text(size = 14),
    strip.text = element_text(size = 16),
    axis.title = element_text(size = 16))
# Side-by-side barcharts
tidy_data %>%
  filter(iso2 == "AU") %>%
  ggplot(aes(x = year, y = count, fill = gender)) +
  geom_bar(stat = "identity", position="dodge") +
  facet_grid(~ age) +
  scale_fill_brewer(palette="Dark2") +
  theme(
    axis.text = element_text(size = 14),
    strip.text = element_text(size = 16),
    axis.title = element_text(size = 16)
  )
# facet by gender
tidy_data %>%
  filter(iso2 == "AU") %>%
  ggplot(aes(x = year, y = count, fill = gender)) +
  geom_bar(stat = "identity") +
  facet_grid(gender ~ age) +
  scale_fill_brewer(palette="Dark2") +
  theme(
    axis.text = element_text(size = 14),
    strip.text = element_text(size = 16),
    axis.title = element_text(size = 16)
  )
# Rose plot
tidy_data %>%
  filter(iso2 == "AU") %>%
  ggplot(aes(x = year, y = count, fill = gender)) +
  geom_bar(stat = "identity") +
  facet_grid(gender ~ age) +
  scale_fill_brewer(palette="Dark2") +
  theme(
    axis.text = element_blank(),
    strip.text = element_text(size = 16),
    axis.title = element_text(size = 16)
  ) + coord_polar()
# Rainbow charts
tidy_data %>%
  filter(iso2 == "AU") %>%
  ggplot(aes(x = 1, y = count, fill = factor(year))) +
  geom_bar(stat = "identity", position="fill") +
  facet_grid(gender ~ age) +
  theme(
    axis.text = element_blank(),
    strip.text = element_text(size = 16),
    axis.title = element_text(size = 16)
  )
# Pie charts
tidy_data %>%
  filter(iso2 == "AU") %>%
  ggplot(aes(x = 1, y = count, fill = factor(year))) +
  geom_bar(stat = "identity", position="fill") +
  facet_grid(gender ~ age) +
  theme(
    axis.text = element_blank(),
    strip.text = element_text(size = 16),
    axis.title = element_text(size = 16)
  ) + coord_polar(theta="y")

# Summary of grammar

# - The grammar is a functional language for decribing the mapping of (random)
# variables to plot elements.
# - Original resource: Lee Wilkinson
# [Grammar of graphics](https://www.cs.uic.edu/~wilkinson/TheGrammarOfGraphics/GOG.html)

# Inference
# - Choice of plot implicitly sets $H_0$, $H_1$
# - Generically, we are thinking  $H_0$: no pattern, $H_1$: pattern,
# but the choice of plot makes this much more explicit
# Putting the pieces together
df <- data.frame(v1=c(rexp(20), rexp(15, 2)),
                 v2=c(rep("A", 20), rep("B", 15)))
ggplot(df, aes(x=v2, y=v1, fill=v2)) +
  geom_boxplot() + coord_flip()
# - Question? Is there a difference between the two groups?
# $H_0$: no difference, $H_1$: difference
# - Data, variables: Two variables: v1, v2; v2 is categorical
# - Mapping: x=V2, y=V1, colour=V1, geom=boxplot
# - Null generating mechanism: permute the values of V1, relative to V2


# Principles of design ----------------------------------------------------


# - Hierarchy of mappings: (first) position along an axis
# - (last) color (Cleveland, 1984; Heer and Bostock, 2009)
# - Pre-attentive: Some elements are noticed before you even realise it.
# - Color: (pre-attentive) palettes - qualitative, sequential, diverging.
# - Proximity: Place elements for primary comparison close together.
# - Change blindness: When focus is interrupted differences may not be noticed.

# Hierarchy of mappings

# - 1.Position - common scale (BEST)
# - 2.Position - nonaligned scale
# - 3.Length, direction, angle
# - 4.Area
# - 5.Volume, curvature
# - 6.Shading, color (WORST)

# Pre-attentive

df <- data.frame(x=runif(100), y=runif(100), cl=sample(c(rep("A", 1), rep("B", 99))))
ggplot(data=df, aes(x, y, shape=cl)) + theme_bw() +
  geom_point() +
  theme(legend.position="None", aspect.ratio=1)

ggplot(data=df, aes(x, y, colour=cl)) +
  geom_point() +
  scale_colour_brewer(palette="Dark2") +
  theme_bw() +
  theme(legend.position="None", aspect.ratio=1)

# Color palettes

# - Qualitative: categorical variables
# - Map categorical variables, with small number of categories
# - Sequential: low to high numeric values
# - Numerical variables, emphasis is on the high values
# - Diverging: negative to positive values
# - Numerical variables, emphasis is on both top and bottom values.
# Only makes sense if you have positive and negative values.
library(RColorBrewer)
display.brewer.all()

# Proximity
ggplot(fly_sub, aes(x=`In general, is itrude to bring a baby on a plane?`,
                    fill=Gender)) +
  scale_fill_brewer(palette="Dark2") +
  geom_bar(position="fill") + coord_flip() + facet_wrap(~Age, ncol=5)
# With this arrangement we can see proportion of gender across rudeness category,
# within age groups.
ggplot(fly_sub, aes(x=Gender,
                    fill=`In general, is itrude to bring a baby on a plane?`)) +
  geom_bar(position="fill") + coord_flip() + facet_wrap(~Age, ncol=5) +
  scale_fill_brewer(palette="Dark2") +
  theme(legend.position="bottom")
# Now we can see proportion of rudeness category across gender, within age groups.
ggplot(fly_sub, aes(x=Age,
                    fill=`In general, is itrude to bring a baby on a plane?`)) +
  geom_bar(position="fill") + coord_flip() + facet_wrap(~Gender, ncol=5) +
  scale_fill_brewer(palette="Dark2") +
  theme(legend.position="bottom")
# And, now we can see proportion of rudeness category across age groups, within gender.



# short-cut ---------------------------------------------------------------

# reload packages
Ctrl + Shift + L

# generate documents
Ctrl/Cmd + Shift + D

# (to show links in docs) build
Ctrl/Cmd + Shift + B

# knitr
Ctrl/Cmd + Shift + K

# run code in a chunk
Ctrl + Alt + C

# Re-run the entire document in a fresh R session using Knit
Ctrl/Cmd + Shift + K

# test
Ctrl/Cmd + Shift + T

# Package -----------------------------------------------------------------

search() # load package = attach to search list
library()
require() # return FALSE insteal of error in library

# create packages
devtools::create("path/to/package/pkgname")

#add package in DESCRITION
devtools::use_package("dplyr", "Suggests")

# roxygen comments
#' Add together two numbers.
#'
#' @param x A number.
#' @param y A number.
#' @return The sum of \code{x} and \code{y}.
#' @examples
#' add(1, 1)
#' add(10, 1)
add <- function(x, y) {
  x + y
}

#' foo: A package for computating the notorious bar statistic.
#'
#' The foo package provides three categories of important functions:
#' foo, bar and baz.
#'
#' @section Foo functions:
#' The foo functions ...
#'
#' @docType package
#' @name foo
NULL

#' @aliases alias1 alias2
#' @keywords keyword1 keyword2
#' adds standardised keywords. Keywords are optional,
#' but if present, must be taken from a predefined list found in
#' file.path(R.home("doc"), "KEYWORDS").
#'

#' Prices of 50,000 round cut diamonds.
#'
#' A dataset containing the prices and other attributes of almost 54,000
#' diamonds.
#'
#' @format A data frame with 53940 rows and 10 variables:
#' \describe{
#'   \item{price}{price, in US dollars}
#'   \item{carat}{weight of the diamond, in carats}
#'   ...
#' }
#' @source \url{http://www.diamondse.info/}
"diamonds"


# generate documents
devtools::document()
Ctrl/Cmd + Shift + D

# (to show links in docs) build
Ctrl/Cmd + Shift + B

# create vignette
devtools::use_vignette("my-vignette")

# view vignette
browseVignettes("packagename")

# build all vignettes from the console (rarely useful)
devtools::build_vignettes()
# Instead create a package bundle with the vignettes included
devtools::build()

# namespace

# load but not attach
requireNamespace() # FALSE
loadNamespace() # error

# ASCII characters
x <- "This is a bullet •"
cat(stringi::stri_escape_unicode(x))

# Test: testthat ----------------------------------------------------------


# testthat set up
devtools::use_testthat()

# do the tests
Ctrl/Cmd + Shift + T
devtools::test()

# Expectations starts with expect_
expect_equal(10, 10 + 1e-7) # uses all_equal()
expect_identical(10, 10 + 1e-7) # uses identical()
string <- "Testing is fun!"
expect_match(string, "Testing") # matches a character vector against a regular expression grepl()
expect_output() # inspects printed output;
expect_message() # messages;
expect_warning() # warnings; and
expect_error() # errors.
a <- list(1:10, letters)
expect_output(str(a), "List of 2")
expect_output(str(a), "int [1:10]", fixed = TRUE)
expect_message(library(mgcv), "This is mgcv")
expect_warning(log(-1))
expect_error(1 / "a")
# But always better to be explicit
expect_warning(log(-1), "NaNs produced")
expect_error(1 / "a", "non-numeric argument")
# Failure to produce a warning or error when an error is expected
expect_warning(log(0))
expect_error(1 / 2)
model <- lm(mpg ~ wt, data = mtcars)
expect_is(model, "lm") #  checks that an object inherit()s from a specified class.
expect_is(model, "glm")
expect_true()
expect_false()
expect_equal_to_reference() # caches the result the first time its run,
#and then compares it to subsequent runs.
#If for some reason the result does change,
#just delete the cache (*) file and re-test.

# test
test_that(){}

# skip a test
check_api <- function() {
  if (not_working()) {
    skip("API not available")
  }
}

test_that("foo api returns bar when given baz", {
  check_api()
  ...
})


# bquote, eval
base <- as.POSIXct("2009-08-03 12:01:59.23", tz = "UTC")

expect_floor_equal <- function(unit, time) {
  expect_equal(floor_date(base, unit), as.POSIXct(time, tz = "UTC"))
}
expect_floor_equal("year", "2009-01-01 00:00:00")
expect_floor_equal("year", "2008-01-01 00:00:00")

expect_floor_equal <- function(unit, time) {
  as_time <- function(x) as.POSIXct(x, tz = "UTC")
  eval(bquote(expect_equal(floor_date(base, .(unit)), as_time(.(time)))))
}
expect_floor_equal("year", "2008-01-01 00:00:00")


# test file example
# test file name should start with test: '^test.*\.[rR]$'
context("String length")
library(stringr)

test_that("str_length is number of characters", {
  expect_equal(str_length("a"), 1)
  expect_equal(str_length("ab"), 2)
  expect_equal(str_length("abc"), 3)
})

test_that("str_length of factor is length of level", {
  expect_equal(str_length(factor("a")), 1)
  expect_equal(str_length(factor("ab")), 2)
  expect_equal(str_length(factor("abc")), 3)
})

test_that("str_length of missing is missing", {
  expect_equal(str_length(NA), NA_integer_)
  expect_equal(str_length(c(NA, 1)), c(NA, 1))
  expect_equal(str_length("NA"), 2)
})

# Data: save and load -----------------------------------------------------

# data file
titanic <- read_csv("titanic.csv") # faster using "_" instead of "."
ozone <- read_table("Oone/ozone.data", header = T)
write_csv(ozone, file = "ozone.csv", row.names = F)
save(ozone, file = "ozone.RData")
oz <- load("ozone.RData")

# save data in package "data/"
save()
devtools::use_data() # "data/"
devtools::use_data_raw() # Use data-raw to compute package datasets when code stored in "data-raw/"
devtools::use_data(x, mtcars, internal = TRUE) # "R/sysdata.rda" not exported
# comprass
tools::checkRdaFiles() # to determine the best compression for each file
devtools::use_data() # with compress set to that optimal value.
tools::resaveRdaFiles() # to re-save in place.

# raw data saved in "inst/extdata"
system.file("extdata", "2012.csv", package = "testdat") # refer to
system.file("extdata", "2010.csv", package = "testdat", mustWork = TRUE)
# add error message when file-non-exist


# Document data in package
#' Prices of 50,000 round cut diamonds.
#'
#' A dataset containing the prices and other attributes of almost 54,000
#' diamonds.
#'
#' @format A data frame with 53940 rows and 10 variables:
#' \describe{
#'   \item{price}{price, in US dollars}
#'   \item{carat}{weight of the diamond, in carats}
#'   ...
#' }
#' @source \url{http://www.diamondse.info/}
"diamonds"

# Rcpp ---------------------------------------------------------------------
# refering to http://r-pkgs.had.co.nz/src.html


# pkgdown -----------------------------------------------------------------

library(pkgdown)
build_site()

template_reference()
template_navbar()
template_articles()

# git ---------------------------------------------------------------------


# create branches
git checkout -b <branch-name>
# sync branch setting
git push --set-upstream origin <branch-name>
# merge branch to master
git merge master
# done with a branch
git checkout master
git merge <branch-name>
git branch -d <branch-name>

# fork
# clone
git clone git@github.com:<your-name>/<repo>.git
cd <repo>
# sync
git remote add upstream git@github.com:<original-name>/<repo>.git

git fetch upstream
# merge
git merge upstream/master
# create branches
git checkout -b <branch-name>
# sync branch setting
git push --set-upstream origin <branch-name>
# move between branches
git checkout <branch>

# if branch pull request
# setting
git checkout master
git branch -u upstream/master
# then
git checkout master
git pull

git checkout <my-branch>
git merge master

# check which branch is tracking which
git branch -vv

#or
git remote show origin

# git pull does
git fetch origin master
git merge origin/master



# local to remote
git remote add origin git@github.com:FinYang/stocon.git
git push -u origin master


git add -A
git reset
git status
git commit -m "Your Message"


```
