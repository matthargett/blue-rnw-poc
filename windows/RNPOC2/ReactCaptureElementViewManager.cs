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

                // Initialize MediaCapture
                try
                {
                    var settings = new MediaCaptureInitializationSettings
                    {
                        VideoDeviceId = device.Id
                    };
                    await mediaCapture.InitializeAsync(settings);

                    view.Source = mediaCapture;
                    view.FlowDirection = FlowDirection.RightToLeft;
                    view.Stretch = Stretch.UniformToFill;

                    await mediaCapture.StartPreviewAsync().AsTask().ConfigureAwait(false);
                }
                catch (Exception e)
                {

                }

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
