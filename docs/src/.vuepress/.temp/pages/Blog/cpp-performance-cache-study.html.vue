<template><div><h1 id="c-performance-study-use-cpu-cache-properties" tabindex="-1"><a class="header-anchor" href="#c-performance-study-use-cpu-cache-properties"><span>C++ Performance Study: Use CPU Cache Properties</span></a></h1>
<p><a href="https://github.com/VPERepos/CppPerformanceStudy_UseCPUCacheProperties/tree/main" target="_blank" rel="noopener noreferrer">Code on Github</a></p>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2>
<p>While learning how to work with images for computer vision, I was told to use a property of CPU cache in order to process two dimensional arrays in C++ faster. It means that accessing 2D arrays by rows in the inner loop is faster than by columns, due to the property of fast cache memory access, containing data lines. It is faster to get the whole line of data from the cache, than jumping from line to line. This small project compares 3 ways of containing 2D data in C++ (but the list is not complete only by these 3 types of data structures). The first considered data structure is a standard C++ dynamically allocated one dimensional array. The second is two dimensional C++ dynamically allocated array. And the last one is a vector of vectors from the standard C++ library.</p>
<h2 id="code-structure-and-behaviour" tabindex="-1"><a class="header-anchor" href="#code-structure-and-behaviour"><span>Code structure and behaviour</span></a></h2>
<p>Another interesting programming feature that I wanted to show in this project is code duplication avoidance by utliziation of polymorph classes. The initial git commit here consists of proof of consept and one can see that code that measures the execution time is duplicated for every data structure. That is why I decided to refactor the code resulting in introduction of the following classes.
<img src="@source/../Pictures/UseCacheClassDiagram.svg" alt="UMLDiagram">
There is a parent class called Containers2d that has common functionality and variables and 3 specializing classes containing the described data structures. After refactoring the code that implements execution time measurements resides only in one place in the parent class. The functionality of the program is described by the following sequence diagram.
The containers are initialized randomly and the program measures execution time of accessing each element calculating squared value and saving it in the initial container. This is done 1000 times in order to measure average execution time.
<img src="@source/../Pictures/UseCacheSequenceDiagram.svg" alt="UMLDiagram"></p>
<h2 id="results-and-discussion" tabindex="-1"><a class="header-anchor" href="#results-and-discussion"><span>Results and discussion</span></a></h2>
<p>The results of several runs for different array sizes are presented in the file results.txt in the repository. Here some excerpt for an array 1000x1000 is presented in the table.</p>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th style="text-align:left"></th>
<th style="text-align:left"></th>
<th style="text-align:left"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Processing type</strong></td>
<td style="text-align:left"><strong>Execution time (microseconds) Array1d</strong></td>
<td style="text-align:left"><strong>Execution time (microseconds) Array2d</strong></td>
<td style="text-align:left"><strong>Execution time (microseconds) Vector2d</strong></td>
</tr>
<tr>
<td style="text-align:left">Processed by rows</td>
<td style="text-align:left">2732.27</td>
<td style="text-align:left">2622.73</td>
<td style="text-align:left">7236.22</td>
</tr>
<tr>
<td style="text-align:left">Processed by columns</td>
<td style="text-align:left">3098.9</td>
<td style="text-align:left">2879.58</td>
<td style="text-align:left">7669.81</td>
</tr>
<tr>
<td style="text-align:left">Ratio (%)</td>
<td style="text-align:left">13</td>
<td style="text-align:left">10</td>
<td style="text-align:left">6</td>
</tr>
</tbody>
</table>
<p>One can see that the slowest container is STL vector - around 3 times slower than the fastest one - dynamic 2D array. But the biggest performance increase has the 1D dynamic array. The results range a little bit from experiment to experiment, but the tendency remains the same. There are only several weird measurements braking the tendency, but recompilation of the project eliminated the behaviour, when STL vector processing by columns was a lot faster than by rows (please see the results.txt in the repository).</p>
</div></template>


