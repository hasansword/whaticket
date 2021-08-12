const messages = {
	tr: {
		translations: {
			signup: {
				title: "Kayıt Ol",
				toasts: {
					success: "Kullanıcı başarılı bir şekilde oluşturuldu.",
					fail: "Kullanıcı oluştururken hata oluştu.",
				},
				form: {
					name: "Ad",
					email: "Eposta",
					password: "Şifre",
				},
				buttons: {
					submit: "Kayıt",
					login: "Hesabınız var mı? Giriş Yapın.",
				},
			},
			login: {
				title: "Giriş",
				form: {
					email: "Eposta",
					password: "Şifre",
				},
				buttons: {
					submit: "Gönder",
					register: "Hesabınız yok mu? Kayıt Ol!",
				},
			},
			auth: {
				toasts: {
					success: "Giriş Başarılı!",
				},
			},
			dashboard: {
				charts: {
					perDay: {
						title: "Bugün - Sohbet Adeti: ",
					},
				},
			},
			connections: {
				title: "Bağlantı",
				toasts: {
					deleted: "WhatsApp bağlantısı başarılı bir şekilde silindi!",
				},
				confirmationModal: {
					deleteTitle: "Sil",
					deleteMessage: "Silmek istediğinize emin misiniz? Bu işlem geri döndürülemez.",
					disconnectTitle: "Bağlantı Yok!",
					disconnectMessage: "Emin misiniz? QR Kodu yeniden okutmanız gerekecek.",
				},
				buttons: {
					add: "WhatsApp Ekle",
					disconnect: "Bağlantıyı Sonlandır",
					tryAgain: "Tekrar Deneyin",
					qrcode: "QR Kodu",
					newQr: "Yeni QR Kodu",
					connecting: "Bağlantıyı Oluştur",
				},
				toolTips: {
					disconnected: {
						title: "WhatsApp oturumu başlatılamadı!",
						content:
							"Telefonun İnternet bağlantısı ve şarj seviyesinin düşük olmadığından emin olunuz. Ya da QR Kodu yeniden oluşturunuz.",
					},
					qrcode: {
						title: "QR Kodu okumasını bekleyiniz.",
						content:
							"'QR Kodu' butonuna tıklayın ve telefonunuzdan QR Kodu okutarak oturumu başlatın.",
					},
					connected: {
						title: "Bağlantı Kuruldu.",
					},
					timeout: {
						title: "Telefonunuzla olan bağlantı koptu!",
						content:
							"Telefonun İnternet bağlantısından, WhatsApp'ın arka planda da çalışır olduğundan ve şarj seviyesinin düşük olmadığından emin olunuz. Ya da QR Kodu yeniden oluşturunuz.",
					},
				},
				table: {
					name: "İsim",
					status: "Durum",
					lastUpdate: "Son Güncelleme",
					default: "Varsayılan",
					actions: "İşlem",
					session: "Oturum",
				},
			},
			whatsappModal: {
				title: {
					add: "WhatsApp Ekle",
					edit: "WhatsApp'ı düzenle",
				},
				form: {
					name: "İsim",
					default: "Varsayılan Yap",
				},
				buttons: {
					okAdd: "Ekle",
					okEdit: "Kaydet",
					cancel: "İptal",
				},
				success: "WhatsApp başarılı bir şekilde kaydedildi.",
			},
			qrCode: {
				message: "Oturumu başlatmak için QR Kodu okuyun.",
			},
			contacts: {
				title: "Kişiler",
				toasts: {
					deleted: "Kişi başarılı bir şekilde silindi!",
				},
				searchPlaceholder: "Ara ...",
				confirmationModal: {
					deleteTitle: "Sil",
					importTitlte: "Kişileri Yükle",
					deleteMessage:
						"Kişiyi silmek istediğinize emin misiniz? İlgili kişiye ait tüm sohbetler silinecektir.",
					importMessage: "Tüm Kişileri telefonunuzdan yüklemek istediğinize emin misiniz?",
				},
				buttons: {
					import: "Kişileri Yükle",
					add: "Kişi Ekle",
				},
				table: {
					name: "İsim",
					whatsapp: "WhatsApp Numarası",
					email: "Eposta",
					actions: "İşlemler",
				},
			},
			contactModal: {
				title: {
					add: "Kişi Ekle",
					edit: "Kişi Düzenle",
				},
				form: {
					mainInfo: "İletişim Bilgileri",
					extraInfo: "Ek Bilgiler",
					name: "İsim",
					number: "Whatsapp numarası",
					email: "Eposta",
					extraName: "Alan Adı",
					extraValue: "Değeri",
				},
				buttons: {
					addExtraInfo: "Ekstra Bilgi Ekle ",
					okAdd: "Ekle",
					okEdit: "Kaydet",
					cancel: "İptal",
				},
				success: "Kişi Başarılı bir şekilde kaydedildi.",
			},
			queueModal: {
				title: {
					add: "Kuyruk Oluştur",
					edit: "Kuyruk Düzenle",
				},
				form: {
					name: "İsim",
					color: "Renk",
					greetingMessage: "Karşılama Mesajı",
				},
				buttons: {
					okAdd: "Ekle",
					okEdit: "Kaydet",
					cancel: "İptal",
				},
			},
			userModal: {
				title: {
					add: "Kullanıcı Ekle",
					edit: "Kullanıcyı Düzenle",
				},
				form: {
					name: "Ad",
					email: "Eposta",
					password: "Şifre",
					profile: "Profil",
				},
				buttons: {
					okAdd: "Ekle",
					okEdit: "Kaydet",
					cancel: "İptal",
				},
				success: "Kullanıcı başarılı bir şekilde kaydedildi.",
			},
			chat: {
				noTicketMessage: "Sohbete Başlamak için, herhangi bir sohbet kabul edin veya başlatın.",
			},
			ticketsManager: {
				buttons: {
					newTicket: "Yeni",
				},
			},
			ticketsQueueSelect: {
				placeholder: "Kuyruklar",
			},
			tickets: {
				toasts: {
					deleted: "İlgili sohbet silindi.",
				},
				notification: {
					message: "Mesaj",
				},
				tabs: {
					open: { title: "Açık" },
					closed: { title: "Kapalı" },
					search: { title: "Ara" },
				},
				search: {
					placeholder: "Sohbet, Kişi veya mesaj ara.",
				},
				buttons: {
					showAll: "Tümü",
				},
			},
			transferTicketModal: {
				title: "Sohbeti Transfer Et",
				fieldLabel: "Kullanıcı Ara",
				noOptions: "Bu isimde Kullanıcı Bulunamadı.",
				buttons: {
					ok: "Transfer",
					cancel: "İptal",
				},
			},
			ticketsList: {
				pendingHeader: "Kuyruktakiler",
				assignedHeader: "İlgilenilenler",
				noTicketsTitle: "Boş!",
				noTicketsMessage: "Aranan terimle alakalı hiçbir şey bulunamadı.",
				buttons: {
					accept: "Kabul Et",
				},
			},
			newTicketModal: {
				title: "Sohbet Oluştur",
				fieldLabel: "Kişileri Ara",
				add: "Ekle",
				buttons: {
					ok: "Kaydet",
					cancel: "İptal",
				},
			},
			mainDrawer: {
				listItems: {
					dashboard: "Pano",
					connections: "Bağlantılar",
					tickets: "Sohbetler",
					contacts: "Kişiler",
					queues: "Kuyruklar",
					administration: "Yönetici",
					users: "Kullanıcılar",
					settings: "Ayarlar",
				},
				appBar: {
					user: {
						profile: "Profil",
						logout: "Çıkış",
					},
				},
			},
			notifications: {
				noTickets: "Bildirim Yok.",
			},
			queues: {
				title: "Kuyruklar",
				table: {
					name: "İsim",
					color: "Renk",
					greeting: "Karşılama Mesajı",
					actions: "İşlemler",
				},
				buttons: {
					add: "Kuyruk Ekle",
				},
				confirmationModal: {
					deleteTitle: "Sil",
					deleteMessage:
						"Silmek istediğinize emin misiniz? Bu işlem geri döndürülemez.",
				},
			},
			queueSelect: {
				inputLabel: "Kuyruklar",
			},
			users: {
				title: "Kullanıcılar",
				table: {
					name: "İsim",
					email: "Eposta",
					profile: "Profil",
					actions: "İşlemler",
				},
				buttons: {
					add: "Add user",
				},
				toasts: {
					deleted: "User deleted sucessfully.",
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage:
						"All user data will be lost. Users' open tickets will be moved to queue.",
				},
			},
			settings: {
				success: "Ayarlar Başarılı Bir Şekilde Kaydedildi",
				title: "Ayarlar",
				settings: {
					userCreation: {
						name: "Kullanıcı Oluşturma",
						options: {
							enabled: "Açık",
							disabled: "Kapalı",
						},
					},
				},
			},
			messagesList: {
				header: {
					assignedTo: "İlgilenen:",
					buttons: {
						return: "Kuyruğa Al",
						resolve: "Kapat",
						reopen: "Yeniden Aç",
						accept: "Kabul",
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Mesaj Yaz",
				placeholderClosed: "Mesaj göndermek için konuşmayı yeniden aç.",
				signMessage: "Ünvan",
			},
			contactDrawer: {
				header: "Kişi Detayları",
				buttons: {
					edit: "Kişiyi Güncelle",
				},
				extraInfo: "Diğer Bilgiler",
			},
			ticketOptionsMenu: {
				delete: "Sil",
				transfer: "Transfer",
				confirmationModal: {
					title: "Sohbeti Sil #",
					titleFrom: "Kişi: ",
					message: "Dikkat! Kişiye Ait tüm mesajlar silinecek.",
				},
				buttons: {
					delete: "Sil",
					cancel: "İptal",
				},
			},
			confirmationModal: {
				buttons: {
					confirm: "Tamam",
					cancel: "İptal",
				},
			},
			messageOptionsMenu: {
				delete: "Sil",
				reply: "Yanıtla",
				confirmationModal: {
					title: "Mesajı Sil?",
					message: "Bu işlem geri döndürülemez.",
				},
			},
			backendErrors: {
				ERR_NO_OTHER_WHATSAPP:
					"En az bir tane WhatsApp bağlantısı olmak zorunda.",
				ERR_NO_DEF_WAPP_FOUND:
					"Varsayılan bir WhatsApp Hesabı bulunamadı. Lütfen Bağlantı sayfasını kontrol edin.",
				ERR_WAPP_NOT_INITIALIZED:
					"WhatsApp Oturumu başlatılamadı. Lütfen Bağlantı sayfasını kontrol edin.",
				ERR_WAPP_CHECK_CONTACT:
					"WhatsApp kişileri getirilemedi. Lütfen Bağlantı sayfasını kontrol edin.",
				ERR_WAPP_INVALID_CONTACT: "Bu uygun bir WhatsApp numarası gözükmüyor.",
				ERR_WAPP_DOWNLOAD_MEDIA:
					"Medya indirilemedi. Lütfen Bağlantı sayfasını kontrol edin.",
				ERR_INVALID_CREDENTIALS: "Doğrulama Hatası. Lütfen Tekrar deneyiniz.",
				ERR_SENDING_WAPP_MSG:
					"Mesaj gönderilirken hata oluştu. Lütfen Bağlantı sayfasını kontrol edin.",
				ERR_DELETE_WAPP_MSG: "Mesaj Silinemiyor!",
				ERR_OTHER_OPEN_TICKET:
					"Bu kişi ile zaten açık bir sohbetiniz bulunmakta.",
				ERR_SESSION_EXPIRED: "Oturum sonlandı. Lütfen Giriş Yapın.",
				ERR_USER_CREATION_DISABLED:
					"Kullanıcı oluşturulması yönetici tarafından engellendi.",
				ERR_NO_PERMISSION: "Bu kaynağa erişmek için yetkiniz yok.",
				ERR_DUPLICATED_CONTACT: "Bu numaraya ait bir kişi zaten mevcut.",
				ERR_NO_SETTING_FOUND: "Bu ID'ye ait bir ayar bulunamadı!",
				ERR_NO_CONTACT_FOUND: "Bu ID'ye ait bir kişi bulunamadı!",
				ERR_NO_TICKET_FOUND: "Bu ID'ye aiit bir sohbet bulunamadı!",
				ERR_NO_USER_FOUND: "Bu ID'ye ait bir kullanıcı bulunamadı!",
				ERR_NO_WAPP_FOUND: "BU ID'ye ait bir WhatsApp bulunamadı!",
				ERR_CREATING_MESSAGE: "Mesaj Oluştururken Hata oluştu!",
				ERR_CREATING_TICKET: "Sohbet Oluştururken Hata oluştu!",
				ERR_FETCH_WAPP_MSG:
					"Error fetching the message in WhtasApp, maybe it is too old.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS:
					"Bu Renk zaten kullanılıyor. Başka bir tane seçiniz.",
				ERR_WAPP_GREETING_REQUIRED:
					"Karşılama !",
			},
		},
	},
};

export { messages };
