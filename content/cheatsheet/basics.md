+++
title = "Basics"

date = 2018-09-09T00:00:00
# lastmod = 2018-09-09T00:00:00

draft = false  # Is this a draft? true/false
toc = true  # Show table of contents? true/false
type = "docs"  # Do not modify.

# Add menu entry to sidebar.
linktitle = "Basics of Basics"
[menu.cheatsheet]
  parent = "Basics"
  weight = 1
+++

In this section, I include the most basic commands for completion.

```R

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
```
