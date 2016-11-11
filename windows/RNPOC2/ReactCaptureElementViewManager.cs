using ReactNative.UIManager;
using ReactNative.UIManager.Annotations;
using System;
using System.Linq;
using Windows.Devices.Enumeration;
using Windows.Media.Capture;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;

namespace RNPOC2
{
    class ReactCaptureElementViewManager : SimpleViewManager<CaptureElement>
    {
        public override string Name
        {
            get
            {
                return "WindowsCaptureElement";
            }
        }

        [ReactProp("enabled")]
        public async void SetEnabled(CaptureElement view, bool enabled)
        {
            if (enabled)
            {
                var devices = await DeviceInformation.FindAllAsync(DeviceClass.VideoCapture);
                var device = devices.FirstOrDefault(x => x.EnclosureLocation != null && x.EnclosureLocation.Panel == Windows.Devices.Enumeration.Panel.Front);
                // Create MediaCapture and its settings
                var mediaCapture = new MediaCapture();

                var settings = new MediaCaptureInitializationSettings
                {
                    VideoDeviceId = device.Id
                };

                // Initialize MediaCapture
                try
                {
                    await mediaCapture.InitializeAsync(settings);
                }
                catch (Exception e)
                {

                }

                view.Source = mediaCapture;
                view.FlowDirection = FlowDirection.RightToLeft;
                view.Stretch = Stretch.UniformToFill;

                await mediaCapture.StartPreviewAsync().AsTask().ConfigureAwait(false);
            }
            else
            {
                view.Source = null;
            }
        }

        protected override CaptureElement CreateViewInstance(ThemedReactContext reactContext)
        {
            return new CaptureElement();
        }
    }
}
