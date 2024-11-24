---
title: "LTCF-Net: A Transformer-Enhanced Dual-Channel Fourier Framework for Low-Light Image Restoration"
authors:
- Gaojing Zhang
date: "2024-11-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: ""

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: We introduce LTCF-Net, a novel network architecture designed for enhancing low-light images. Unlike Retinex-based methods, our approach utilizes two color spaces—LAB and YUV—to efficiently separate and process color information, by leveraging the separation of luminance from chromatic components in color images. In addition, our model incorporates the Transformer architecture to comprehensively understand image content while maintaining computational efficiency. To dynamically balance the brightness in output images, we also introduce a Fourier transform module that adjusts the luminance channel in the frequency domain. This mechanism could uniformly balance brightness across different regions while eliminating background noises, and thereby enhancing visual quality. By combining these innovative components, LTCF-Net effectively improves low-light image quality while keeping the model lightweight. Experimental results demonstrate that our method outperforms current state-of-the-art approaches across multiple evaluation metrics and datasets, achieving more natural color restoration and a balanced brightness distribution.

# Summary. An optional shortened abstract.
summary: A novel model for weak light enhancement.

tags:
- Low light enhancement

featured: true

links:
- name: Custom Link
  url: http://example.org
url_pdf: http://arxiv.org/pdf/
url_code: 'https://github.com/suiuko/LTCF-Net'
url_dataset: '#'
url_poster: '#'
url_project: ''
url_slides: ''
url_source: '#'
url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- lowlight

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

This work is driven by the results in my [previous paper](/publication/conference-paper/) on LLMs.

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
