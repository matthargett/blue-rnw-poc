using Newtonsoft.Json.Linq;
using ReactNative.UIManager;
using ReactNative.UIManager.Annotations;
using System;
using Windows.UI.Xaml.Controls;
using XamlAnimatedGif;
using ReactNative.UIManager.Events;
using System.Collections.Generic;

namespace RNPOC2
{
    class ReactWinGifViewManager : SimpleViewManager<Image>
    {
        public override string Name
        {
            get
            {
                return "WinGif";
            }
        }

        public override IReadOnlyDictionary<string, object> ExportedCustomDirectEventTypeConstants
        {
            get
            {
                return new Dictionary<string, object>
                {
                    { "topGifFail", new Dictionary<string, object>
                        {
                            {"registrationName", "onGifFail" }
                        }
                    }
                };
            }
        }

        protected override Image CreateViewInstance(ThemedReactContext reactContext)
        {
            return new Image();
        }

        [ReactProp("src")]
        public void SetSource(Image view, JObject src)
        {
            var uri = src.Value<string>("uri");
            AnimationBehavior.SetSourceUri(view, new Uri(uri));
        }

        protected override void AddEventEmitters(ThemedReactContext reactContext, Image view)
        {
            base.AddEventEmitters(reactContext, view);
            view.ImageFailed += OnImageFailed;
        }

        private void OnImageFailed(object sender, Windows.UI.Xaml.ExceptionRoutedEventArgs e)
        {
            var image = (Image)sender;
            image.GetReactContext()
                .GetNativeModule<UIManagerModule>()
                .EventDispatcher
                .DispatchEvent(new ImageFailedEvent(image.GetTag()));
        }

        public override void OnDropViewInstance(ThemedReactContext reactContext, Image view)
        {
            base.OnDropViewInstance(reactContext, view);
            view.ImageFailed -= OnImageFailed;
        }
    }

    internal class ImageFailedEvent : Event
    {
        public ImageFailedEvent(int viewTag) 
            : base(viewTag, TimeSpan.FromTicks(Environment.TickCount))
        {
        }

        public override string EventName
        {
            get
            {
                return "topGifFail";
            }
        }

        public override void Dispatch(RCTEventEmitter eventEmitter)
        {
            eventEmitter.receiveEvent(ViewTag, EventName, new JObject());
        }
    }
}
