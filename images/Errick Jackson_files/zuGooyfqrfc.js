if (self.CavalryLogger) { CavalryLogger.start_js(["CMzbt"]); }

__d("XReactComposerMLEAttachmentBootstrapController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/mle/bootstrap/",{composer_id:{type:"String",required:!0}})}),null);
__d("ReactComposerMLELazyAttachment.react",["cx","Bootloader","React","ReactComposerAttachmentType","ReactComposerLoadableAttachmentBodyMixin","XReactComposerMLEAttachmentBootstrapController"],(function(a,b,c,d,e,f,g){a=b("React").createClass({displayName:"ReactComposerMLELazyAttachment",mixins:[b("ReactComposerLoadableAttachmentBodyMixin")],statics:{attachmentID:b("ReactComposerAttachmentType").MLE},bootload:function(a){b("Bootloader").loadModules(["ReactComposerMLEAttachmentContainer.react"],a,"ReactComposerMLELazyAttachment.react")},getBootstrapURI:function(){return b("XReactComposerMLEAttachmentBootstrapController").getURIBuilder().setString("composer_id",this.context.composerID).getURI()}});e.exports=a}),null);
__d("XReactComposerSendGiftV2AttachmentBootstrapController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/sendgift/v2/bootstrap/",{composer_id:{type:"String",required:!0},composer_type:{type:"Enum",required:!0,enumType:1},target_id:{type:"Int",required:!0}})}),null);
__d("ReactComposerSendGiftLazyAttachment.react",["ReactComposerAttachmentType","ReactComposerLoadableAttachmentBodyMixin","ActorURI","Bootloader","React","XReactComposerSendGiftV2AttachmentBootstrapController"],(function(a,b,c,d,e,f){a=b("React").createClass({displayName:"ReactComposerSendGiftLazyAttachment",mixins:[b("ReactComposerLoadableAttachmentBodyMixin")],statics:{attachmentID:b("ReactComposerAttachmentType").SEND_GIFT},bootload:function(a){b("Bootloader").loadModules(["ReactComposerSendGiftAttachmentContainer.react"],a,"ReactComposerSendGiftLazyAttachment.react")},getBootstrapURI:function(){var a=b("XReactComposerSendGiftV2AttachmentBootstrapController").getURIBuilder().setString("composer_id",this.context.composerID).setEnum("composer_type",this.context.composerType).setInt("target_id",this.context.targetID).getURI();return b("ActorURI").create(a,this.context.actorID)}});e.exports=a}),null);
__d("ReactComposerTimelineBootloader",["Bootloader"],(function(a,b,c,d,e,f){"use strict";a={statusAttachment:function(a){b("Bootloader").loadModules(["ReactComposerStatusAttachmentContainer.react","ReactComposerTimelinePostButtonContainer.react"],a,"ReactComposerTimelineBootloader")},mediaAttachment:function(a){b("Bootloader").loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerTimelineMediaPostButtonContainer.react"],a,"ReactComposerTimelineBootloader")},qandaAttachment:function(a){b("Bootloader").loadModules(["ReactComposerQAndAAttachmentContainer.react","ReactComposerTimelineMediaPostButtonContainer.react"],a,"ReactComposerTimelineBootloader")},sendGiftAttachment:function(a){b("Bootloader").loadModules(["ReactComposerSendGiftAttachmentContainer.react","ReactComposerTimelineMediaPostButtonContainer.react"],a,"ReactComposerTimelineBootloader")}};e.exports=a}),null);
__d("ReactComposerSproutsMLESelector.react",["ix","cx","fbt","React","ReactComposerAttachmentType","ReactComposerLoggingName","ReactComposerSproutsSelector.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){return b("React").createElement("span",{className:"_sg1"},b("React").createElement(b("ReactComposerSproutsSelector.react"),{attachmentID:b("ReactComposerAttachmentType").MLE,loggingName:b("ReactComposerLoggingName").MLE_TAB_SELECTOR,icon:g("122925"),label:i._("Life Event")}))};function a(){j.apply(this,arguments)}e.exports=a}),null);
__d("ReactComposerSproutsSendGiftSelector.react",["ix","cx","fbt","FluxContainer","React","ReactComposerAttachmentType","ReactComposerConfig","ReactComposerLoggingName","ReactComposerAttachmentSelectorContainer.react","ReactComposerFocusStore","SendGiftActionType","SendGiftActionTypedLogger","LayerHideOnTransition","SimpleNUXMessage","SimpleNUXMessageTypes","XUIAmbientNUX.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").PureComponent);j=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={shouldShowNux:!b("SimpleNUXMessage").hasUserSeenMessage(b("SimpleNUXMessageTypes").GIFT_MONEY_COMPOSER_SPROUT_SELECTOR_NUX)&&b("ReactComposerFocusStore").isComposerFocused(this.props.composerID)},this.$1=function(){b("SimpleNUXMessage").markMessageSeenByUser(b("SimpleNUXMessageTypes").GIFT_MONEY_COMPOSER_SPROUT_SELECTOR_NUX),this.setState({shouldShowNux:!1})}.bind(this),c}a.prototype.render=function(){return b("React").createElement("span",{className:"_sg1"},b("React").createElement(b("ReactComposerAttachmentSelectorContainer.react"),{attachmentID:b("ReactComposerAttachmentType").SEND_GIFT,loggingName:b("ReactComposerLoggingName").SEND_GIFT_TAB_SELECTOR,icon:g("123034"),label:i._("Send Gift"),id:"composerSendGiftAttachmentSelector",ref:"composerSendGiftSelector",enableDisplayTooltip:!1,onAfterSelected:function(){new(b("SendGiftActionTypedLogger"))().setAction(b("SendGiftActionType").CLICK_GLYPH).log(),this.$1()}.bind(this)}),this.$2())};a.prototype.$2=function(){return b("React").createElement(b("XUIAmbientNUX.react"),{behaviors:{LayerHideOnTransition:b("LayerHideOnTransition")},contextRef:function(){return this.refs.composerSendGiftSelector}.bind(this),key:"ambientNUX",shown:this.state.shouldShowNux,position:"above",width:"normal",alignment:"right",onCloseButtonClick:this.$1},this.$3())};a.prototype.$3=function(){var a=this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").SEND_GIFT].targetDisplayName;return i._("New! Send money as a gift on your friend's timeline. Only you and {target user name} will see the amount sent.",[i._param("target user name",a)])};a.calculateState=function(a,c,d){return{shouldShowNux:!b("SimpleNUXMessage").hasUserSeenMessage(b("SimpleNUXMessageTypes").GIFT_MONEY_COMPOSER_SPROUT_SELECTOR_NUX)&&b("ReactComposerFocusStore").isComposerFocused(c.composerID)}};a.getStores=function(a,c){return[b("ReactComposerFocusStore")]};e.exports=b("FluxContainer").create(a,{withContext:!1,withProps:!0})}),null);
__d("ReactTimelineSproutsComposer.react",["cx","fbt","React","BootloadedComponent.react","ReactComposerAttachmentType","ReactComposerBodyContainer.react","ReactComposerContextProviderMixin","ReactComposerEvents","ReactComposerFeedMediaPostButtonContainer.react","ReactComposerFeedPostButtonContainer.react","ReactComposerFocusInit","ReactComposerHeaderContainer.react","ReactComposerLiveVideoAttachmentSelector.react","ReactComposerLiveVideoLazyAttachment.react","ReactComposerLiveVideoPreviewButton.react","ReactComposerLoggingName","ReactComposerMLELazyAttachment.react","ReactComposerPrefillUtils","ReactComposerQAndALazyAttachment.react","ReactComposerSharingSpacesSelectorAttachmentGatedModule","ReactComposerSproutsAlbumSelector.react","ReactComposerSproutsMLESelector.react","ReactComposerSproutsQAndASelector.react","ReactComposerSproutsStatusAndMediaSelector.react","ReactComposerSproutsMediaSelector.react","ReactComposerSproutsSendGiftSelector.react","ReactComposerTimelineBootloader","ReactComposerListLazyAttachment.react","ReactComposerVisualPollLazyAttachment.react","ReactComposerSendGiftLazyAttachment.react","ReactComposerTaggerType","ReactComposerWithSprouts.react","JSResource","TimelineComposer","Arbiter","$","coalesce","idx","nullthrows"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=b("ReactComposerSharingSpacesSelectorAttachmentGatedModule").module;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.componentDidMount=function(){"use strict";var a=this.props,c=a.contextConfig,d=a.config;a=a.prefillConfig;a&&b("ReactComposerPrefillUtils").prefill(c.composerID,a);b("TimelineComposer").init(c.composerID);d.focusOnInit&&b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+c.composerID)};a.prototype.getChildContext=function(){"use strict";return b("ReactComposerContextProviderMixin").staticGetChildContext(this.props)};a.prototype.render=function(){"use strict";var a=this.$1();a=b("React").createElement(b("ReactComposerWithSprouts.react"),{defaultAttachmentOnExpand:b("ReactComposerAttachmentType").STATUS,innerProps:{className:"_5n2b",loggingConfig:this.props.config.loggingConfig,sproutsConfig:this.props.config.sproutsConfig,promotedSprout:this.props.config.sproutsPromotionConfig?this.props.config.sproutsPromotionConfig.sprout:null},expandOnInit:!1},b("React").createElement(b("ReactComposerHeaderContainer.react"),this.props,a),this.$2(),this.$3(),b("React").createElement(b("ReactComposerBodyContainer.react"),{expanded:this.props.config.showExpandedComposer},this.$4(),this.$5(),this.$6(),this.$7(),this.$8(),this.$9(),this.$10(),this.$11(),this.$12()));return a};a.prototype.$1=function(){"use strict";__p&&__p();var a=this.props.config.attachmentsConfig,c=[];a[b("ReactComposerAttachmentType").STATUS].enabled&&c.push(b("React").createElement(b("ReactComposerSproutsStatusAndMediaSelector.react"),{key:b("ReactComposerLoggingName").STATUS_TAB_SELECTOR,label:a[b("ReactComposerAttachmentType").STATUS].defaultTabTitle,statusOnly:this.props.contextConfig.gks&&this.props.contextConfig.gks.photoTab}));this.props.contextConfig.gks&&this.props.contextConfig.gks.photoTab&&a[b("ReactComposerAttachmentType").MEDIA].enabled&&c.push(b("React").createElement(b("ReactComposerSproutsMediaSelector.react"),{key:b("ReactComposerLoggingName").MEDIA_TAB_SELECTOR,config:this.props.config}));var d=this.props.contextConfig.gks&&this.props.contextConfig.gks.hideAlbumTab;a[b("ReactComposerAttachmentType").ALBUM].enabled&&!d&&c.push(this.$13());a[b("ReactComposerAttachmentType").LIVE_VIDEO].enabled&&c.push(this.$14());a[b("ReactComposerAttachmentType").SEND_GIFT].enabled&&c.push(this.$15());a[b("ReactComposerAttachmentType").MLE].enabled&&c.push(this.$16());a[b("ReactComposerAttachmentType").QANDA].enabled&&c.push(this.$17());return c};a.prototype.$13=function(){"use strict";var a=this.props.contextConfig.gks&&this.props.contextConfig.gks.albumTabUsesSelector;return b("React").createElement(b("ReactComposerSproutsAlbumSelector.react"),{key:b("ReactComposerLoggingName").ALBUM,config:this.props.config,useCollectionSelector:a})};a.prototype.$16=function(){"use strict";return b("React").createElement(b("ReactComposerSproutsMLESelector.react"),{key:b("ReactComposerLoggingName").MLE_TAB_SELECTOR})};a.prototype.$15=function(){"use strict";return b("React").createElement(b("ReactComposerSproutsSendGiftSelector.react"),{key:b("ReactComposerLoggingName").SEND_GIFT_TAB_SELECTOR,config:this.props.config,composerID:this.props.contextConfig.composerID})};a.prototype.$17=function(){"use strict";return b("React").createElement(b("ReactComposerSproutsQAndASelector.react"),{key:b("ReactComposerLoggingName").QANDA_TAB_SELECTOR})};a.prototype.$14=function(){"use strict";return b("React").createElement(b("ReactComposerLiveVideoAttachmentSelector.react"),{config:this.props.config,contextConfig:this.props.contextConfig,key:"live_video",sprouts:!0})};a.prototype.$4=function(){var a;if(!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").STATUS].enabled)return null;a=b("nullthrows")((a=this.props.contextConfig)!=null?(a=a.jsModules)!=null?a.statusAttachment:a:a);return b("React").createElement(a,{key:"status",config:this.props.config,selected:this.props.config.initSelectedAttachment===b("ReactComposerAttachmentType").STATUS,postButtonModule:b("ReactComposerFeedPostButtonContainer.react"),bootloader:b("ReactComposerTimelineBootloader"),placeholder:this.props.config.targetData.viewerIsTarget?h._("What's on your mind?"):b("coalesce")(this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").STATUS].placeholderText,h._("Write something..."))})};a.prototype.$5=function(){var a;if(!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").MEDIA].enabled)return null;a=b("nullthrows")((a=this.props.contextConfig)!=null?(a=a.jsModules)!=null?a.mediaAttachment:a:a);return b("React").createElement(a,{key:"media",config:this.props.config,postButtonModule:b("ReactComposerFeedMediaPostButtonContainer.react"),bootloader:b("ReactComposerTimelineBootloader"),selected:this.props.config.initSelectedAttachment===b("ReactComposerAttachmentType").MEDIA})};a.prototype.$7=function(){"use strict";return!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").LIST].enabled?null:b("React").createElement(b("ReactComposerListLazyAttachment.react"),{key:"list",config:this.props.config})};a.prototype.$8=function(){"use strict";return!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").VISUAL_POLL].enabled?null:b("React").createElement(b("ReactComposerVisualPollLazyAttachment.react"),{key:"visual_poll",config:this.props.config})};a.prototype.$9=function(){"use strict";return!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").SEND_GIFT].enabled?null:b("React").createElement(b("ReactComposerSendGiftLazyAttachment.react"),{key:"send_gift",config:this.props.config,selected:this.props.config.initSelectedAttachment===b("ReactComposerAttachmentType").SEND_GIFT})};a.prototype.$10=function(){"use strict";return!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").MLE].enabled?null:b("React").createElement(b("ReactComposerMLELazyAttachment.react"),{key:"mle",config:this.props.config})};a.prototype.$11=function(){"use strict";return!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").QANDA].enabled?null:b("React").createElement(b("ReactComposerQAndALazyAttachment.react"),{key:"qanda",config:this.props.config})};a.prototype.$6=function(){"use strict";return!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").LIVE_VIDEO].enabled?null:b("React").createElement(b("ReactComposerLiveVideoLazyAttachment.react"),{key:"live_video",config:this.props.config,postButtonModule:b("ReactComposerLiveVideoPreviewButton.react"),selected:!1})};a.prototype.$2=function(){"use strict";var a=this.props.config.taggersConfig;return a&&a[b("ReactComposerTaggerType").FUN_FACT]&&a[b("ReactComposerTaggerType").FUN_FACT].enabled?b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ReactComposerFunFactSinglePromptTaggerContainer.react").__setRef("ReactTimelineSproutsComposer.react"),bootloadPlaceholder:b("React").createElement("div",null)}):null};a.prototype.$3=function(){"use strict";var a=this.props.config.taggersConfig;return a&&a[b("ReactComposerTaggerType").FUN_FACT]&&a[b("ReactComposerTaggerType").FUN_FACT].enabled?b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ReactComposerFunFactAskPromptTaggerContainer.react").__setRef("ReactTimelineSproutsComposer.react"),bootloadPlaceholder:b("React").createElement("div",null)}):null};a.prototype.$12=function(){"use strict";return j?b("React").createElement(j,{config:this.props.config,key:"sharingSpacesSelectorAttachment"}):null};function a(){"use strict";i.apply(this,arguments)}a.childContextTypes=b("ReactComposerContextProviderMixin").childContextTypes;e.exports=a}),null);