# Plotly.js Financial Charts

Plotly.js makes interactive, publication-quality graphs online. Examples of how to make financial charts.

Plotly Studio: Transform any dataset into an interactive data application in minutes with AI. [Try Plotly Studio now.](https://plotly.com/studio/?utm_medium=graphing_libraries&utm_campaign=studio_early_access&utm_content=sidebar)

- [Waterfall Charts](https://plotly.com/javascript/waterfall-charts/)
- [Indicators](https://images.plot.ly/plotly-documentation/thumbnail/indicator.jpg)](https://plotly.com/javascript/indicator/)
- [Candlestick Charts](https://plotly.com/javascript/candlestick-charts/)
- [Funnel and Funnelarea Charts](https://plotly.com/javascript/funnel-charts/)
- [Time Series](https://plotly.com/javascript/time-series/)
- [OHLC Charts](https://plotly.com/javascript/ohlc-charts/)
- [Gauge Charts](https://plotly.com/javascript/gauge-charts/)
- [Bullet Charts](https://plotly.com/javascript/bullet-charts/)
# Getting Started with Plotly in Python

Getting Started with Plotly for Python.

  

Plotly Studio: Transform any dataset into an interactive data application in minutes with AI. [Try Plotly Studio now.](https://plotly.com/studio/?utm_medium=graphing_libraries&utm_campaign=studio_early_access&utm_content=sidebar)

### Overview

The [`plotly` Python library](https://plotly.com/python/) is an interactive, [open-source](https://plotly.com/python/is-plotly-free) plotting library that supports over 40 unique chart types covering a wide range of statistical, financial, geographic, scientific, and 3-dimensional use-cases.

Built on top of the Plotly JavaScript library ([plotly.js](https://plotly.com/javascript/)), `plotly` enables Python users to create beautiful interactive web-based visualizations that can be displayed in Jupyter notebooks, saved to standalone HTML files, or served as part of pure Python-built web applications using Dash. The `plotly` Python library is sometimes referred to as "plotly.py" to differentiate it from the JavaScript library.

Thanks to deep integration with our [Kaleido](https://github.com/plotly/Kaleido) image export utility, `plotly` also provides great support for non-web contexts including desktop editors (e.g. QtConsole, Spyder, PyCharm) and static document publishing (e.g. exporting notebooks to PDF with high-quality vector images).

This Getting Started guide explains how to install `plotly` and related optional pages. Once you've installed, you can use our documentation in three main ways:

1. You jump right in to **examples** of how to make [basic charts](https://plotly.com/python/basic-charts/), [statistical charts](https://plotly.com/python/statistical-charts/), [scientific charts](https://plotly.com/python/scientific-charts/), [financial charts](https://plotly.com/python/financial-charts/), [maps](https://plotly.com/python/maps/), and [3-dimensional charts](https://plotly.com/python/3d-charts/).
2. If you prefer to learn about the **fundamentals** of the library first, you can read about [the structure of figures](https://plotly.com/python/figure-structure/), [how to create and update figures](https://plotly.com/python/creating-and-updating-figures/), [how to display figures](https://plotly.com/python/renderers/), [how to theme figures with templates](https://plotly.com/python/templates/), [how to export figures to various formats](https://plotly.com/python/static-image-export/) and about [Plotly Express, the high-level API](https://plotly.com/python/plotly-express/) for doing all of the above.
3. You can check out our exhaustive **reference** guides: the [Python API reference](https://plotly.com/python-api-reference) or the [Figure Reference](https://plotly.com/python/reference)

For information on using Python to build web applications containing plotly figures, see the [_Dash User Guide_](https://dash.plotly.com/).

We also encourage you to join the [Plotly Community Forum](http://community.plotly.com/) if you want help with anything related to `plotly`.

### Installation

`plotly` may be installed using `pip`:

```ruby
$ pip install plotly  
```

or `conda`:

```r
$ conda install -c conda-forge plotly  
```

If you want to use Plotly Express, install its required dependencies with:

```css
pip install plotly[express]  
```

You'll also need to install a [supported dataframe library](https://plotly.com/python/px-arguments#supported-dataFrame-types).

### Plotly charts in Dash

[Dash](https://plotly.com/dash/) is the best way to build analytical apps in Python using Plotly figures. To run the app below, run `pip install dash`, click "Download" to get the code and run `python app.py`.

Get started with [the official Dash docs](https://dash.plotly.com/installation) and **learn how to effortlessly [style](https://plotly.com/dash/design-kit/) & publish apps like this with [Dash Enterprise](https://plotly.com/dash/) or [Plotly Cloud](https://plotly.com/cloud/).**

**Sign up for Dash Club** → Free cheat sheets plus updates from Chris Parmer and Adam Schroeder delivered to your inbox every two months. Includes tips and tricks, community apps, and deep dives into the Dash architecture. [Join now](https://go.plotly.com/dash-club?utm_source=Dash+Club+2022&utm_medium=graphing_libraries&utm_content=inline).

#### JupyterLab Support

To use `plotly` in [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/), install the `jupyterlab` and `anywidget` packages in the same environment as you installed `plotly`, using `pip`:

```ruby
$ pip install jupyterlab anywidget  
```

or `conda`:

```ruby
$ conda install jupyterlab anywidget  
```

Launch JupyterLab with:

```ruby
$ jupyter lab  
```

and display plotly figures inline:

import plotly.express as px
fig = px.bar(x=["a", "b", "c"], y=[1, 3, 2])
fig.show()

[](https://plotly.com/)

or using `FigureWidget` objects.

import plotly.express as px
fig = px.bar(x=["a", "b", "c"], y=[1, 3, 2])

import plotly.graph_objects as go
fig_widget = go.FigureWidget(fig)
fig_widget

See [_Displaying Figures in Python_](https://plotly.com/python/renderers/) for more information on the renderers framework, and see [_Plotly FigureWidget Overview_](https://plotly.com/python/figurewidget/) for more information on using `FigureWidget`.

See the [Troubleshooting guide](https://plotly.com/python/troubleshooting/) if you run into any problems with JupyterLab, particularly if you are using multiple Python environments inside Jupyter.

#### Jupyter Notebook Support

For use in the classic [Jupyter Notebook](https://jupyter.org/), install the `notebook` and `ipywidgets` packages using `pip`:

```javascript
pip install "notebook>=7.0" "anywidget>=0.9.13"  
```

or `conda`:

```javascript
conda install "notebook>=7.0" "anywidget>=0.9.13"  
```

These packages contain everything you need to run a Jupyter notebook...

```ruby
$ jupyter notebook  
```

and display plotly figures inline using the notebook renderer...

import plotly.express as px
fig = px.bar(x=["a", "b", "c"], y=[1, 3, 2])
fig.show()

[](https://plotly.com/)

or using `FigureWidget` objects.

import plotly.express as px
fig = px.bar(x=["a", "b", "c"], y=[1, 3, 2])

import plotly.graph_objects as go
fig_widget = go.FigureWidget(fig)
fig_widget

See [_Displaying Figures in Python_](https://plotly.com/python/renderers/) for more information on the renderers framework, and see [_Plotly FigureWidget Overview_](https://plotly.com/python/figurewidget/) for more information on using `FigureWidget`.

### Static Image Export

plotly.py supports [static image export](https://plotly.com/python/static-image-export/), using the [`kaleido`](https://github.com/plotly/Kaleido) package. (Support for the legacy [`orca`](https://github.com/plotly/orca) image export utility is deprecated and will be removed after September 2025.)

#### Kaleido

The [`kaleido`](https://github.com/plotly/Kaleido) package has no dependencies and can be installed using pip...

```ruby
$ pip install --upgrade kaleido  
```

or conda.

```r
$ conda install -c plotly python-kaleido  
```

#### Extended Geo Support

Some plotly.py features rely on fairly large geographic shape files. The county choropleth figure factory is one such example. These shape files are distributed as a separate `plotly-geo` package. This package can be installed using pip...

```ruby
$ pip install plotly-geo==1.0.0  
```

or conda.

```r
$ conda install -c plotly plotly-geo=1.0.0  
```

See [_USA County Choropleth Maps in Python_](https://plotly.com/python/county-choropleth/) for more information on the county choropleth figure factory.

### Where to next?

Once you've installed, you can use our documentation in three main ways:

1. You jump right in to **examples** of how to make [basic charts](https://plotly.com/python/basic-charts/), [statistical charts](https://plotly.com/python/statistical-charts/), [scientific charts](https://plotly.com/python/scientific-charts/), [financial charts](https://plotly.com/python/financial-charts/), [maps](https://plotly.com/python/maps/), and [3-dimensional charts](https://plotly.com/python/3d-charts/).
2. If you prefer to learn about the **fundamentals** of the library first, you can read about [the structure of figures](https://plotly.com/python/figure-structure/), [how to create and update figures](https://plotly.com/python/creating-and-updating-figures/), [how to display figures](https://plotly.com/python/renderers/), [how to theme figures with templates](https://plotly.com/python/templates/), [how to export figures to various formats](https://plotly.com/python/static-image-export/) and about [Plotly Express, the high-level API](https://plotly.com/python/plotly-express/) for doing all of the above.
3. You can check out our exhaustive **reference** guides: the [Python API reference](https://plotly.com/python-api-reference) or the [Figure Reference](https://plotly.com/python/reference)

For information on using Python to build web applications containing plotly figures, see the [_Dash User Guide_](https://dash.plotly.com/).

We also encourage you to join the [Plotly Community Forum](http://community.plotly.com/) if you want help with anything related to `plotly`.

### What About Dash?

[Dash](https://dash.plot.ly/) is an open-source framework for building analytical applications, with no Javascript required, and it is tightly integrated with the Plotly graphing library.

Learn about how to install Dash at [https://dash.plot.ly/installation](https://dash.plot.ly/installation).

Everywhere in this page that you see `fig.show()`, you can display the same figure in a Dash application by passing it to the `figure` argument of the [`Graph` component](https://dash.plot.ly/dash-core-components/graph) from the built-in `dash_core_components` package like this:

import plotly.graph_objects as go # or plotly.express as px
fig = go.Figure() # or any Plotly Express function e.g. px.bar(...)
# fig.add_trace( ... )
# fig.update_layout( ... )

from dash import Dash, dcc, html

app = Dash()
app.layout = html.Div([
    dcc.Graph(figure=fig)
])

app.run(debug=True, use_reloader=False)  # Turn off reloader if inside Jupyter