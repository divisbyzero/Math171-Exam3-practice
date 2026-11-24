var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "exam3-practice",
  "level": "1",
  "url": "#exam3-practice",
  "type": "Article",
  "number": "",
  "title": "MATH 171",
  "body": " MATH 171    These problems are meant to help you prepare for Exam 3. It covers sections 5.3 through 5.10 of the textbook.     Exam 3 Practice Problems    Show that the following limit does not exist .    Let .   Method 1 (the limit along two paths).  Along :  . Along : . Since , the limit does not exist.   Method 2 (the limit along all lines ).  . This value depends on , so the limit does not exist.      Find the locations of any local maxima, local minima, and saddle points of .    The first partial derivatives are . Setting gives . Substituting into gives , so or . The critical points are and .  The second partial derivatives are , so .     , so is a saddle point.     and , so is a local minimum.    There are no local maxima.         Let . Compute the mixed partial derivatives and , and verify that Clairaut's theorem holds.    Use the product rule and chain rule on the first term and the quotient rule on the second term:  . Differentiating with respect to : . Differentiating with respect to : . Therefore .      The map below shows the level curves of the temperature function in degrees Fahrenheit. (As usual, we assume the positive -axis points east and the positive -axis points north.) The points , , , are marked on the map, with coordinates , , and so on.   Temperature contour map of the contiguous United States with labeled points A through H and direction vectors   A map of the contiguous United States with isotherms (level curves of temperature) labeled from degrees in the north to degrees along the Texas Gulf Coast. Temperatures generally increase from north to south.   is near the Gulf Coast of Louisiana, between the and degree curves. Eight vectors labeled through radiate from in the compass directions north, northeast, east, southeast, south, southwest, west, and northwest.  is in Montana, on the northern edge of a warm closed region, near the degree curve.  is in the Texas Panhandle, between the degree curve to the north and the degree curve to the south.  is in Kansas, inside a cooler tongue bounded by the degree curve. A unit vector at points southwest, toward the degree curve.  is in Wyoming, at the center of a small warm region of closed curves.  is in Virginia and West Virginia, at the center of a cool closed degree curve.  is in Utah, between the warm closed regions around (to the northeast) and (to the southwest), with cooler temperatures to the west and east.  is in southern Nevada, at the center of a warm bullseye of tightly spaced closed curves ( , , , and warmer).        Which of the vectors , , , points in the direction of ?     Vector    Vector    Vector    Vector    Vector    Vector    Vector    Vector       Which is greater, or ?              Is positive, negative, zero, or is it impossible to tell?     Positive    Negative    Zero    Impossible to tell       Suppose is the unit vector shown on the map. Is positive, negative, zero, or is it impossible to tell?     Positive    Negative    Zero    Impossible to tell       Which point is a local minimum of ?     Point    Point    Point    Point    Point    None of these       Which point is a saddle point of ?     Point    Point    Point    Point    Point    None of these        Let .     Find the equation of the tangent plane to the graph at the point .    We have . So, is a point on the plane. The partial derivatives are . So, and , and hence is a normal vector to the tangent plane. So, the equation of the tangent plane is       Find the linearization of at the point .    The linearization is the function whose graph is the tangent plane: .      Use your answer to part (b) to approximate . Then use a calculator to find the actual value, and compare.     . The actual value is , so the approximation is off by only about .       You are hiking on a hill whose elevation (in meters) is where and are measured in meters, the positive -axis points east, and the positive -axis points north. You are standing at the point .     If you walk northeast, are you ascending or descending? At what rate?    The gradient is . So, . Northeast is the direction of the unit vector , so . Since the directional derivative is negative, you are descending, at a rate of meters of elevation per meter walked.      In what direction should you walk to climb most steeply? (You do not have to give compass directions; a vector is sufficient.) What is the slope in that direction?    You climb most steeply in the direction of (roughly southwest, but more west than south). The slope in this direction is .      In what direction(s) should you walk to stay at the same elevation?    To stay at the same elevation, walk in a direction with , that is, perpendicular to . Two such vectors are .       A rectangular box without a lid is to be made from of cardboard. Find the maximum volume of such a box.    Let the base be by and the height be (all in meters). With no lid, the amount of cardboard is , so . The volume is . Using the quotient rule and simplifying, .  Setting both equal to zero gives . Because , the solutions and are not in the domain, so . Subtracting the equations, we obtain , and because , . Then , so and .  The volume tends to at the edges of the allowed region (as or approaches , or approaches ), so this single critical point gives the maximum. The maximum volume is .      Find the absolute maximum and absolute minimum values of on the closed triangular region with vertices , , and .    Since is continuous and the region is closed and bounded, the Extreme Value Theorem guarantees that has an absolute maximum and an absolute minimum on the region. We find all candidate points.   Interior. The first partial derivatives are . Setting both equal to zero gives and . Since , the critical point is inside the triangle.   Bottom side (along ). Here , whose derivative is zero at . This gives the candidate point .   Left side (along ). Here , whose derivative is zero at . This gives the candidate point .   Hypotenuse (along ). Here , whose derivative is zero at . This gives the candidate point .   Corner points. The corners , , and are also candidates.  Evaluating at every candidate:                        The absolute maximum value is , and the absolute minimum value is .      Suppose is a critical point of a function with continuous second partial derivatives. In each case, what can you say about at ?           Local maximum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Local minimum  Correct. and , so has a local minimum at .    Saddle point  Incorrect. Compute and check its sign (and, if needed, the sign of ).    The test is inconclusive  Incorrect. Compute and check its sign (and, if needed, the sign of ).             Local maximum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Local minimum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Saddle point  Correct. , so has a saddle point at .    The test is inconclusive  Incorrect. Compute and check its sign (and, if needed, the sign of ).             Local maximum  Correct. and , so has a local maximum at .    Local minimum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Saddle point  Incorrect. Compute and check its sign (and, if needed, the sign of ).    The test is inconclusive  Incorrect. Compute and check its sign (and, if needed, the sign of ).             Local maximum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Local minimum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Saddle point  Incorrect. Compute and check its sign (and, if needed, the sign of ).    The test is inconclusive  Correct. , so the Second Derivatives Test gives no information.        Determine whether each statement is true or false.     If as along the lines and , then .    False. Checking two paths is not enough. For , the limit along both axes is , but along the limit is , so the limit does not exist.       is a vector.    False. is a dot product, so it is a scalar (a rate of change), not a vector.       is orthogonal to the level curve of through .    True. If parametrizes the level curve , differentiating gives , so the gradient is orthogonal to the curve (when ).      The maximum value of over all unit vectors is .    True. , which is largest when , that is, when points in the direction of .      For any unit vector , .    True. .      If , then has a local maximum or a local minimum at .    False. A critical point can be a saddle point. For , , but is a saddle point.      If is a critical point of , , and , then has a local minimum at .    False. The test also requires . For , , but , so is a saddle point.      If is differentiable and has a local maximum at , then .    True. If has a local maximum at , then and have local maxima at and , so .      "
},
{
  "id": "ex-limit-dne",
  "level": "2",
  "url": "#ex-limit-dne",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Show that the following limit does not exist .    Let .   Method 1 (the limit along two paths).  Along :  . Along : . Since , the limit does not exist.   Method 2 (the limit along all lines ).  . This value depends on , so the limit does not exist.   "
},
{
  "id": "ex-classify-critical-points",
  "level": "2",
  "url": "#ex-classify-critical-points",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Find the locations of any local maxima, local minima, and saddle points of .    The first partial derivatives are . Setting gives . Substituting into gives , so or . The critical points are and .  The second partial derivatives are , so .     , so is a saddle point.     and , so is a local minimum.    There are no local maxima.     "
},
{
  "id": "ex-clairaut",
  "level": "2",
  "url": "#ex-clairaut",
  "type": "Worksheet Exercise",
  "number": "1.3",
  "title": "",
  "body": "  Let . Compute the mixed partial derivatives and , and verify that Clairaut's theorem holds.    Use the product rule and chain rule on the first term and the quotient rule on the second term:  . Differentiating with respect to : . Differentiating with respect to : . Therefore .   "
},
{
  "id": "ex-isotherms",
  "level": "2",
  "url": "#ex-isotherms",
  "type": "Worksheet Exercise",
  "number": "1.4",
  "title": "",
  "body": "  The map below shows the level curves of the temperature function in degrees Fahrenheit. (As usual, we assume the positive -axis points east and the positive -axis points north.) The points , , , are marked on the map, with coordinates , , and so on.   Temperature contour map of the contiguous United States with labeled points A through H and direction vectors   A map of the contiguous United States with isotherms (level curves of temperature) labeled from degrees in the north to degrees along the Texas Gulf Coast. Temperatures generally increase from north to south.   is near the Gulf Coast of Louisiana, between the and degree curves. Eight vectors labeled through radiate from in the compass directions north, northeast, east, southeast, south, southwest, west, and northwest.  is in Montana, on the northern edge of a warm closed region, near the degree curve.  is in the Texas Panhandle, between the degree curve to the north and the degree curve to the south.  is in Kansas, inside a cooler tongue bounded by the degree curve. A unit vector at points southwest, toward the degree curve.  is in Wyoming, at the center of a small warm region of closed curves.  is in Virginia and West Virginia, at the center of a cool closed degree curve.  is in Utah, between the warm closed regions around (to the northeast) and (to the southwest), with cooler temperatures to the west and east.  is in southern Nevada, at the center of a warm bullseye of tightly spaced closed curves ( , , , and warmer).        Which of the vectors , , , points in the direction of ?     Vector    Vector    Vector    Vector    Vector    Vector    Vector    Vector       Which is greater, or ?              Is positive, negative, zero, or is it impossible to tell?     Positive    Negative    Zero    Impossible to tell       Suppose is the unit vector shown on the map. Is positive, negative, zero, or is it impossible to tell?     Positive    Negative    Zero    Impossible to tell       Which point is a local minimum of ?     Point    Point    Point    Point    Point    None of these       Which point is a saddle point of ?     Point    Point    Point    Point    Point    None of these     "
},
{
  "id": "ex-tangent-plane-linearization",
  "level": "2",
  "url": "#ex-tangent-plane-linearization",
  "type": "Worksheet Exercise",
  "number": "1.5",
  "title": "",
  "body": "  Let .     Find the equation of the tangent plane to the graph at the point .    We have . So, is a point on the plane. The partial derivatives are . So, and , and hence is a normal vector to the tangent plane. So, the equation of the tangent plane is       Find the linearization of at the point .    The linearization is the function whose graph is the tangent plane: .      Use your answer to part (b) to approximate . Then use a calculator to find the actual value, and compare.     . The actual value is , so the approximation is off by only about .    "
},
{
  "id": "ex-hiking",
  "level": "2",
  "url": "#ex-hiking",
  "type": "Worksheet Exercise",
  "number": "1.6",
  "title": "",
  "body": "  You are hiking on a hill whose elevation (in meters) is where and are measured in meters, the positive -axis points east, and the positive -axis points north. You are standing at the point .     If you walk northeast, are you ascending or descending? At what rate?    The gradient is . So, . Northeast is the direction of the unit vector , so . Since the directional derivative is negative, you are descending, at a rate of meters of elevation per meter walked.      In what direction should you walk to climb most steeply? (You do not have to give compass directions; a vector is sufficient.) What is the slope in that direction?    You climb most steeply in the direction of (roughly southwest, but more west than south). The slope in this direction is .      In what direction(s) should you walk to stay at the same elevation?    To stay at the same elevation, walk in a direction with , that is, perpendicular to . Two such vectors are .    "
},
{
  "id": "ex-box-volume",
  "level": "2",
  "url": "#ex-box-volume",
  "type": "Worksheet Exercise",
  "number": "1.7",
  "title": "",
  "body": "  A rectangular box without a lid is to be made from of cardboard. Find the maximum volume of such a box.    Let the base be by and the height be (all in meters). With no lid, the amount of cardboard is , so . The volume is . Using the quotient rule and simplifying, .  Setting both equal to zero gives . Because , the solutions and are not in the domain, so . Subtracting the equations, we obtain , and because , . Then , so and .  The volume tends to at the edges of the allowed region (as or approaches , or approaches ), so this single critical point gives the maximum. The maximum volume is .   "
},
{
  "id": "ex-absolute-extrema-triangle",
  "level": "2",
  "url": "#ex-absolute-extrema-triangle",
  "type": "Worksheet Exercise",
  "number": "1.8",
  "title": "",
  "body": "  Find the absolute maximum and absolute minimum values of on the closed triangular region with vertices , , and .    Since is continuous and the region is closed and bounded, the Extreme Value Theorem guarantees that has an absolute maximum and an absolute minimum on the region. We find all candidate points.   Interior. The first partial derivatives are . Setting both equal to zero gives and . Since , the critical point is inside the triangle.   Bottom side (along ). Here , whose derivative is zero at . This gives the candidate point .   Left side (along ). Here , whose derivative is zero at . This gives the candidate point .   Hypotenuse (along ). Here , whose derivative is zero at . This gives the candidate point .   Corner points. The corners , , and are also candidates.  Evaluating at every candidate:                        The absolute maximum value is , and the absolute minimum value is .   "
},
{
  "id": "ex-second-derivative-test",
  "level": "2",
  "url": "#ex-second-derivative-test",
  "type": "Worksheet Exercise",
  "number": "1.9",
  "title": "",
  "body": "  Suppose is a critical point of a function with continuous second partial derivatives. In each case, what can you say about at ?           Local maximum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Local minimum  Correct. and , so has a local minimum at .    Saddle point  Incorrect. Compute and check its sign (and, if needed, the sign of ).    The test is inconclusive  Incorrect. Compute and check its sign (and, if needed, the sign of ).             Local maximum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Local minimum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Saddle point  Correct. , so has a saddle point at .    The test is inconclusive  Incorrect. Compute and check its sign (and, if needed, the sign of ).             Local maximum  Correct. and , so has a local maximum at .    Local minimum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Saddle point  Incorrect. Compute and check its sign (and, if needed, the sign of ).    The test is inconclusive  Incorrect. Compute and check its sign (and, if needed, the sign of ).             Local maximum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Local minimum  Incorrect. Compute and check its sign (and, if needed, the sign of ).    Saddle point  Incorrect. Compute and check its sign (and, if needed, the sign of ).    The test is inconclusive  Correct. , so the Second Derivatives Test gives no information.     "
},
{
  "id": "ex-true-false",
  "level": "2",
  "url": "#ex-true-false",
  "type": "Worksheet Exercise",
  "number": "1.10",
  "title": "",
  "body": "  Determine whether each statement is true or false.     If as along the lines and , then .    False. Checking two paths is not enough. For , the limit along both axes is , but along the limit is , so the limit does not exist.       is a vector.    False. is a dot product, so it is a scalar (a rate of change), not a vector.       is orthogonal to the level curve of through .    True. If parametrizes the level curve , differentiating gives , so the gradient is orthogonal to the curve (when ).      The maximum value of over all unit vectors is .    True. , which is largest when , that is, when points in the direction of .      For any unit vector , .    True. .      If , then has a local maximum or a local minimum at .    False. A critical point can be a saddle point. For , , but is a saddle point.      If is a critical point of , , and , then has a local minimum at .    False. The test also requires . For , , but , so is a saddle point.      If is differentiable and has a local maximum at , then .    True. If has a local maximum at , then and have local maxima at and , so .    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
