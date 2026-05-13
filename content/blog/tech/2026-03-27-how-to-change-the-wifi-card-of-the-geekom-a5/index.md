---
draft: false
layout: post
title: Changing the Geekom A5 WiFi Card
date: 2026-03-27
categories: ["Open Source", "Tech"]
ShowToc: true
TocOpen: false
---

In this blog post, I am going to explain how to change the Realtek 8852BE WiFi card that comes with the Geekom A5.

Many people (myself included) **experience WiFi issues when using Linux on the Geekom A5**. A lot of people report that the Realtek 8852BE WiFi card works well on Windows, but on Linux, WiFi would often suddenly disconnect and it would not be possible anymore to reconnect to the internet. Only a reboot helps in this situation.

The only solution is to replace the Realtek 8852BE WiFi chip with a better-supported Linux WiFi card, such as the Intel AX210.

I am writing this blog post because I was looking for something like this before I changed the WiFi card on my Geekom A5, but I couldn't find anything. So, this is why I want to provide this information and what I learned in the process here.

## Step 1: Prepare Your Tools

I recommend preparing the following tools:

1. A very small screwdriver for M.2 screws - preferrably magnetic
2. A pair of tweezers - ideally made of plastic
3. An adjustable wrench or pliers to remove a small screw nut

## Step 2: Open the Case

Opening the Geekom A5 is straightforward. Simply remove the four screws on the underside and lift off the cover. Carefully lift away the cover in order to prevent damaging the connection to the STATA slot.

There are many videos online showing this step, such as this one from Geekom themselves:

{{< youtube yIOMXJJgbxI >}}

Once we open the case, we see this:

{{< figure src="images/img1.jpg" height=80% width=80% >}}

## Step 3: Remove the SSD

The WiFi card is located under the SSD, so we need to remove that first, by simply unscewing the screw that keeps it in place and then lift the card away:

{{< figure src="images/img2.jpg" height=75% width=75% >}}

## Step 4: Remove the Plastic Cover of the WiFi Card

After we have removed the SSD, we can see the Realtek 8852BE WiFi card:

{{< figure src="images/img3.jpeg" height=60% width=60% >}}

Now here is where my struggle began: on top of the WiFi card and over the two WiFi antenna cables, **there is a glued on transparent plastic cover**. Apparently, this is to prevent a short circuit, but maybe also to keep the antenna cables in place.

You’ll need to carefully peel off this plastic cover. Unfortunately, there’s no elegant way to do this - just remove it gently.

{{< figure src="images/img4.jpg" height=60% width=60% >}}

After you have removed the plastic cover, you can disconnect the black and the grey antenna cables.

## Step 5: Remove the Screw Nut

The screw that holds down the WiFi card is called a "combination screw", because it simulatenously holds down the WiFi card but it also holds the screw that held down the SSD card we removed before. Use a pair of small pliers or an adjustable wrench to loosen and remove the screw carefully.

{{< figure src="images/img5.jpg" height=60% width=60% >}}

## Step 6: Swap out the WiFi card

Now you can simply pull out the old WiFi card and put in your new WiFi card. Connecting the antenna cables (black to main and gray to aux) can be tricky in the Geekom A5, as the cables tend to detach easily. Here you simply need some patience to connect the cable, to put in the new WiFi card and to add the screw nut. Now you can also put back the transparent plastic cover on top of the WiFi card:

{{< figure src="images/img6.jpg" height=80% width=80% >}}

## Step 7: Reassembly

After that, we only need to put the SSD back in its slot and secure it with the M.2 screw. Finally, carefully reattach the case of the Geekom A5 and tighten the screws on the underside. That's it!

# Perfect WiFi

After replacing the WiFi card, WiFi on Linux Mint worked flawlessly, with no further issues. For future purchases, I would try to avoid Realtek WiFi cards, if possible.